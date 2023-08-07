import React from "react";
import Typography from "./typography";

export default {
    title: 'Typography',
    component: Typography
}

// Regular
export const displayRegular = () => <Typography variant='display-regular text-6xl' size='60'>The quick brown fox jumps over the lazy dog</Typography>
export const headingH1Regular = () => <Typography variant='heading-h1-regular text-[44px]' size='44'>The quick brown fox jumps over the lazy dog</Typography>
export const headingH2Regular = () => <Typography variant='heading-h2-regular text-4xl' size='36'>The quick brown fox jumps over the lazy dog</Typography>
export const headingH3Regular = () => <Typography variant='heading-h3-regular text-[28px]' size='28'>The quick brown fox jumps over the lazy dog</Typography>
export const headingH4Regular = () => <Typography variant='heading-h4-regular text-2xl' size='24'>The quick brown fox jumps over the lazy dog</Typography>
export const headingH5Regular = () => <Typography variant='heading-h5-regular text-xl' size='20'>The quick brown fox jumps over the lazy dog</Typography>
export const paragraph18Regular = () => <Typography variant='paragraph-18-regular text-lg' size='18'>The quick brown fox jumps over the lazy dog</Typography>
export const paragraph16Regular = () => <Typography variant='paragraph-16-regular text-base' size='16'>The quick brown fox jumps over the lazy dog</Typography>
export const paragraph12Regular = () => <Typography variant='paragraph-12-regular text-xs' size='12'>The quick brown fox jumps over the lazy dog</Typography>
export const paragraph10Regular = () => <Typography variant='paragraph-10-regular text-[10px]' size='10'>The quick brown fox jumps over the lazy dog</Typography>

// Bold
export const headingH1Bold = () => <Typography variant='heading-h1-bold text-[44px] font-bold' size='44'>The quick brown fox jumps over the lazy dog</Typography>
export const paragraph16Bold = () => <Typography variant='paragraph-16-bold text-base font-bold' size='16'>The quick brown fox jumps over the lazy dog</Typography>

// Italic
export const headingH1Italic = () => <Typography variant='heading-h1-italic text-[44px] italic' size='44'>The quick brown fox jumps over the lazy dog</Typography>
export const paragraph16Italic = () => <Typography variant='paragraph-16-italic text-base italic' size='16'>The quick brown fox jumps over the lazy dog</Typography>

// Underline
export const headingH1Underline = () => <Typography variant='heading-h1-underline text-[44px] underline underline-offset-2' size='44'>The quick brown fox jumps over the lazy dog</Typography>
export const paragraph16Underline = () => <Typography variant='paragraph-16-underline text-base underline underline-offset-2' size='16'>The quick brown fox jumps over the lazy dog</Typography>