"use client";

import "@radix-ui/themes/styles.css";
import { Text, Grid } from "@radix-ui/themes";

export default function Bookings() {
    return (

        <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
            {/* <DecorativeBox />
            <DecorativeBox />
            <DecorativeBox />
            <DecorativeBox />
            <DecorativeBox />
            <DecorativeBox /> */}
            <Text>Hello from Radix Themes :)</Text>
        </Grid>
    );
}
