<script setup lang="ts">
// Footer configuration for navigation and content
const footerConfig = [
    {
        heading: "About",
        href: "/about",
        links: [
            { label: "News", href: "https://blog.khanacademy.org/news/" },
            { label: "Impact", href: "https://blog.khanacademy.org/research/", external: true },
            { label: "Our team", href: "/about/the-team" },
            { label: "Our interns", href: "/about/our-interns" },
            { label: "Our content specialists", href: "/about/our-content-specialists" },
            { label: "Our leadership", href: "/about/our-board" },
            { label: "Our supporters", href: "/about/our-supporters" },
            { label: "Our contributors", href: "/contribute/credits" },
            { label: "Our finances", href: "https://khanacademyannualreport.org/#finances" },
            { label: "Careers", href: "/careers" },
            { label: "Internships", href: "/careers/interns" },
            { label: "Cookie Preferences", href: "#" }
        ]
    },
    {
        heading: "Contact",
        links: [
            { label: "Help center", href: "https://khanacademy.zendesk.com/hc/en-us" },
            { label: "Support community", href: "https://khanacademy.zendesk.com/hc/en-us/community/topics" },
            { label: "Share your story", href: "/stories" },
            { label: "Press", href: "https://khanacademy.zendesk.com/hc/en-us/articles/202483630" }
        ]
    },
    {
        heading: "Download our apps",
        href: "/downloads",
        links: [
            {
                label: "App Store",
                href: "https://itunes.apple.com/app/apple-store/id469863705?pt=698519&ct=website%20footer&mt=8",
                external: true,
                img: "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?releaseDate=1331424000",
                imgAlt: "Download on the App Store"
            },
            {
                label: "Google Play",
                href: "https://play.google.com/store/apps/details?id=org.khanacademy.android&referrer=utm_source%3Dwebsite%2520footer%26utm_medium%3Dwebsite%2520footer%26utm_campaign%3Dwebsite%2520footer",
                external: true,
                img: "https://cdn.kastatic.org/images/store-badges/google-play/en.png",
                imgAlt: "Get it on Google Play"
            }
        ]
    },
    {
        heading: "Courses",
        links: [
            { label: "Math (NCERT)", href: "/math/in-math-ncert" },
            { label: "Math (Bridge)", href: "/math/in-in-math-foundations" },
            { label: "Math (Telangana)", href: "/math/math-tg" },
            { label: "Math (Maharashtra)", href: "/math/math-r-mr" },
            { label: "Science (NCERT)", href: "/science/in-science-ncert" },
            { label: "Science (Bridge)", href: "/science/science-bridge-ncert" },
            { label: "Science (Telangana)", href: "/science/science-tg" },
            { label: "All boards", href: "/math/scert-content" },
            { label: "Explore more", href: "/in-in-explore-more" },
            { label: "Khan for Educators", href: "/khan-for-educators-india" }
        ]
    }
];
</script>

<template>
    <footer class="py-0 px-5 md:py-3 bg-[#0b2149] text-[#8295BA] relative">
        <div class="p-0 max-w-[1200px] mx-auto md:px-5 relative">
            <div class="flex-col md:flex-row px-0 pt-[32px] pb-[24px] relative flex">
                <div class="w-auto h-auto text-center pr-0 md:h-full md:w-[40%] md:pr-10 pb-12">
                    <p class="my-0 mx-auto block text-xl leading-[24px] max-w-[440px] pb-2 md:m-0">Our mission is to
                        provide a free,
                        world-class education to anyone, anywhere.</p>
                    <div aria-hidden="true" class="w-5 h-5 basis-5 shrink-0 flex flex-col items-stretch"></div>
                    <p class="my-0 mx-auto block text-xl leading-[24px] max-w-[440px] pb-2 md:m-0">Khan Academy is a
                        501(c)(3) nonprofit
                        organization. <a target="_blank" rel="noopener noreferrer"
                            href="https://india.khanacademy.org/donate"
                            class="text-white items-center hover:underline">Donate<span data-testid="external-icon"
                                class="external-icon"></span></a> or
                        <a class="text-white items-center hover:underline" href="/contribute">volunteer</a> today!
                    </p>
                </div>
                <div role="presentation" aria-labelledby="site-navigation">
                    <h2 id="site-navigation" class="h-[1px] w-[1px] absolute -m-[1px] overflow-hidden">Site Navigation
                    </h2>
                    <div aria-label="footer" role="navigation">
                        <ul class="columns-2 md:columns-3 text-xs leading-4 relative">
                            <li v-for="section in footerConfig" :key="section.heading"
                                class="pb-8 break-inside-avoid-column">
                                <h3 class="font-bold block text-xs leading-4 tracking-[0.6px] pr-2 pb-2 min-h-8">
                                    <a v-if="section.href" :href="section.href"
                                        class="text-white items-center hover:underline">
                                        {{ section.heading }}
                                    </a>
                                    <template v-else>
                                        {{ section.heading }}
                                    </template>
                                </h3>
                                <ul>
                                    <li v-for="link in section.links" :key="link.label" class="pr-2 pb-2 min-h-8">
                                        <a :href="link.href" class="text-white items-center hover:underline"
                                            :target="link.external ? '_blank' : undefined"
                                            :rel="link.external ? 'noopener noreferrer' : undefined">
                                            <template v-if="(link as any).img">
                                                <img :src="(link as any).img" :alt="(link as any).imgAlt ?? ''"
                                                    class="w-[100px]" />
                                            </template>
                                            <template v-else>
                                                {{ link.label }}
                                                <span v-if="link.external" data-testid="external-icon"
                                                    class="external-icon"></span>
                                            </template>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col w-full absolute left-0 bottom-6 md:block md:w-auto">
                    <div class="justify-center md:justify-start flex items-center"><span
                            class="block text-xs leading-4">Language</span>
                        <div class="flex flex-col items-stretch relative"><button aria-label="Change language"
                                aria-expanded="false"
                                class="bg-transparent h-full text-white pl-2 text-xs leading-4 hover:underline"
                                data-testid="language_picker" tabindex="0" aria-controls=":r4:" role="button" id=":r5:"
                                aria-haspopup="menu">English<span class="caret-down icon"></span></button></div>
                        <noscript></noscript>
                    </div>
                    <div class="w-full flex justify-center pt-2.5 md:block md:w-auto">
                        <div class="w-[279px] flex flex-row items-center justify-between relative"><span
                                class="block text-xs leading-4">Country</span><a
                                class="h-[13px] text-white text-xs ml-3 flex flex-row items-center justify-between hover:underline"
                                href="https://www.khanacademy.org"><img class="w-[13px] h-3 mt-[1px] mr-[6px] mb-0 ml-0"
                                    src="https://cdn.kastatic.org/images/country-flag-icons/us-flag.png"
                                    alt="">U.S.</a><a
                                class="h-[13px] text-white text-xs ml-3 flex flex-row items-center justify-between hover:underline"
                                href="https://india.khanacademy.org"><img
                                    class="w-[13px] h-3 mt-[1px] mr-[6px] mb-0 ml-0"
                                    src="https://cdn.kastatic.org/images/country-flag-icons/india-flag.png"
                                    alt="">India</a><a
                                class="h-[13px] text-white text-xs ml-3 flex flex-row items-center justify-between hover:underline"
                                href="https://es.khanacademy.org"><img class="w-[13px] h-3 mt-[1px] mr-[6px] mb-0 ml-0"
                                    src="https://cdn.kastatic.org/images/country-flag-icons/mexico-flag.png"
                                    alt="">Mexico</a><a
                                class="h-[13px] text-white text-xs ml-3 flex flex-row items-center justify-between hover:underline"
                                href="https://pt.khanacademy.org"><img class="w-[13px] h-3 mt-[1px] mr-[6px] mb-0 ml-0"
                                    src="https://cdn.kastatic.org/images/country-flag-icons/brazil-flag.png"
                                    alt="">Brazil</a></div>
                    </div>
                </div>
            </div>
            <div
                class="pt-6 pb-2 flex-col justify-center items-center md:py-2 md:flex-row md:justify-start flex relative border-t border-[#21242c29]">
                <div class="mt-2 md:m-0 relative flex flex-col items-stretch"><span class="block text-xs leading-4">©
                        2025 Khan
                        Academy</span>
                </div>
                <div class="mt-2 md:m-0 relative flex flex-col items-stretch md:ml-4"><span
                        class="block text-xs leading-4"><a class="text-white items-center hover:underline"
                            href="/about/docs/khan-academy-terms-of-service">Terms
                            of use</a></span>
                </div>
                <div class="mt-2 md:m-0 relative flex flex-col items-stretch md:ml-4"><span
                        class="block text-xs leading-4"><a class="text-white items-center hover:underline"
                            href="/about/privacy-policy">Privacy
                            Policy</a></span></div>
                <div class="mt-2 md:m-0 relative flex flex-col items-stretch md:ml-4"><span
                        class="block text-xs leading-4"><a class="text-white items-center hover:underline"
                            href="/about/cookie-policy">Cookie
                            Notice</a></span></div>
                <div class="mt-2 md:m-0 relative flex flex-col items-stretch md:ml-4"><span
                        class="block text-xs leading-4"><a class="text-white items-center hover:underline"
                            href="/about/accessibility-statement">Accessibility
                            Statement</a></span>
                </div>
                <div aria-hidden="true" class="flex flex-col relative grow items-stretch"></div>
                <div class="mt-6 md:m-0 flex items-stretch relative"><a aria-label="Follow us on Facebook"
                        href="https://www.facebook.com/khanacademy"
                        class="text-white opacity-60 inline-block items-center hover:text-primary hover:opacity-100"><span
                            class="facebook-icon icon"></span></a><a aria-label="Follow us on Twitter"
                        href="https://twitter.com/khanacademy"
                        class="text-white opacity-60 inline-block items-center hover:text-primary hover:opacity-100 ml-2"><span
                            class="twitter-icon icon"></span></a><a aria-label="Follow us on Instagram"
                        href="https://instagram.com/khanacademy"
                        class="text-white opacity-60 inline-block items-center hover:text-primary hover:opacity-100 ml-2"><span
                            class="instagram-icon icon"></span></a></div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.external-icon {
    @apply inline-block shrink-0 grow-0 w-4 h-4;
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: currentColor;
    margin-inline-start: 4px;
    vertical-align: -10%;
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/130111336c1bb24e-arrow-square-out-bold.svg);
}

.icon {
    @apply inline-block shrink-0 grow-0 bg-white;
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: center;
}

.caret-down {
    @apply w-3 h-3;
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/188ef46fb20241ed-caret-down-bold.svg);
    vertical-align: middle;
    margin-left: 2px;
}

.facebook-icon {
    @apply w-6 h-6;
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/e5b43b9c0717d989-facebook-logo-fill.svg);
}

.twitter-icon {
    @apply w-6 h-6;
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/f5240dcae2b53974-twitter-logo-fill.svg);
}

.instagram-icon {
    @apply w-6 h-6;
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/62e92f7fbb787def-instagram-logo-fill.svg);
}
</style>