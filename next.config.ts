const CreateNextIntl = require('next-intl/plugin');
const withNextIntl = CreateNextIntl('./src/i18n/request.ts');
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};

export default withNextIntl(nextConfig);
