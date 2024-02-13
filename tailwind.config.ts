import { type Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: [
        "./src/**/*.tsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary: {
                            DEFAULT: "#000000",
                            foreground: "#ffffff",
                        },
                    },
                },
            },
        }),
    ],
} satisfies Config;
