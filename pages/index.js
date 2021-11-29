/** @format */

import Head from "next/head";
import Image from "next/image";
import AuthPages from "../helpers/AuthPages";
import Link from "next/link";
import router, { Router } from "next/router";
import { useEffect } from "react";

const Index = () => {
	useEffect(() => {
		router.push("/dashboard");
	}, []);
	return <div></div>;
};

export default AuthPages(Index);
