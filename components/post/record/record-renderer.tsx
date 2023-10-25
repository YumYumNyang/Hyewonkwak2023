"use client";
import { ExtendedRecordMap } from "notion-types";
import React from "react";
import { NotionRenderer } from "react-notion-x";

const RecordRenderer = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
	return <NotionRenderer recordMap={recordMap} />;
};

export default RecordRenderer;
