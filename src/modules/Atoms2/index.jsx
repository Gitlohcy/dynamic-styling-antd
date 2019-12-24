import React from "react";
import { Layout } from "antd";
import AtomsHeader from "./Header";
import InnerLayout from "./InnerLayout";


export default () => {
    return (
        <>
            <Layout>
                <AtomsHeader />
                <InnerLayout />
            </Layout>
        </>
    );
};
