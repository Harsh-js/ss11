/** @format */
import { baseUrl } from "../configs/index";
import Joi from "joi";
import TokenGenerator from "uuid-token-generator";
import axios from "axios";
import router from "next/router";
import toast from "react-hot-toast";
const tokgen = new TokenGenerator(512, TokenGenerator.BASE62);

export const Login = async (body) => {
	try {
		const token = tokgen.generate();
		const Schema = Joi.object({
			email: Joi.string()
				.email({ tlds: { allow: false } })
				.required(),
			password: Joi.string().required(),
		}).validate(body);

		if (Schema.error) {
			toast.error(Schema.error.message);
			return console.log(Schema.error);
		}

		const { email, password } = Schema.value;

		const response = await axios.post(`${baseUrl}/auth/login`, {
			email: email,
			password,
			fcm_token: token,
		});
		const data = await response.data;
		if (!data.status) {
			return toast.error(data.message);
		}

		if (data.status) {
			toast.success(data.message);
			console.log(data);
			localStorage.setItem("user", JSON.stringify(data.data));
			router.push("/");
		}
	} catch (err) {
		console.log(err);
	}
};

export const OtpSend = async (body) => {
	// return router.push(
	// 	`/otp?phone=${"1478552963"}&email=${"harsh.dqot@gmail.com"}&password=${"Admin@123"}&referral_code=${""}`,
	// 	"otp"
	// );
	try {
		const Schema = Joi.object({
			mobile: Joi.string()
				.length(10)
				.pattern(/^[0-9]+$/)
				.required(),
			email: Joi.string()
				.email({ minDomainSegments: 2, tlds: { allow: false } })
				.required(),
			password: Joi.string()
				.pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})"))
				.required()
				.messages({
					"string.pattern.base":
						"Password must contains at least 6 characters, including UPPER or lowercase with numbers.",
				}),
			password_confirmation: Joi.any()
				.equal(Joi.ref("password"))
				.required()
				.messages({ "any.only": "{{#label}} does not match" }),
			referral_code: Joi.allow(null).required(),
		}).validate(body);

		if (Schema.error) {
			toast.error(Schema.error.message);
			return console.log(Schema.error);
		}

		const { mobile, email, password, password_confirmation, referral_code } =
			Schema.value;

		const response = await axios.post(`${baseUrl}/auth/otp/send`, {
			phone: mobile,
			email,
			password,
			password_confirmation,
			referral_code,
		});
		const data = await response.data;
		if (!data.status) {
			return toast.error(data.message);
		}

		if (data.status) {
			toast.success(data.message);
			console.log(data);
			router.push(
				`/otp?phone=${mobile}&email=${email}&password=${password}&referral_code=${referral_code}&hash=${data.data.hash}`,
				"otp"
			);
		}
	} catch (err) {
		console.log(err);
	}
};

export const Register = async (body) => {
	try {
		const Schema = Joi.object({
			phone: Joi.string()
				.length(10)
				.pattern(/^[0-9]+$/)
				.required(),
			email: Joi.string()
				.email({ minDomainSegments: 2, tlds: { allow: false } })
				.required(),
			password: Joi.string()
				.pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})"))
				.required()
				.messages({
					"string.pattern.base":
						"Password must contains at least 6 characters, including UPPER or lowercase with numbers.",
				}),
			hash: Joi.string().required(),
			otp: Joi.number().required(),
			referral_code: Joi.allow(null).required(),
		}).validate(body);

		if (Schema.error) {
			toast.error(Schema.error.message);
			return console.log(Schema.error);
		}

		const { phone, email, password, referral_code, hash, otp } = Schema.value;

		const response = await axios.post(`${baseUrl}/auth/register`, {
			phone,
			email,
			password,
			password_confirmation: password,
			referral_code,
			hash,
			otp,
		});
		const data = await response.data;
		if (!data.status) {
			toast.error(data.message);
			return "";
		}

		if (data.status) {
			toast.success(data.message);
			console.log(data);
			router.push("/login");
			return otp;
		}
	} catch (err) {
		console.log(err);
	}
};
