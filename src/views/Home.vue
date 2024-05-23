<template>
    <div class="container ace-ng-card my-5">
        <div class="grid">
            <div class="col-12 md:col-6 my-auto text-center">
                <AceNGLogo></AceNGLogo>
            </div>

            <div class="col-12 md:col-6 my-auto">

                <div class="grid">
                    <div class="col-12 text-center md:text-left">
                        <span class="company-name text-2xl">AceNG</span>
                    </div>
                </div>

                <div class="grid border-bottom-1 border-400">
                    <div class="col-12">
                        <p class="text-lg">Description:</p>
                        <div class="description">
                            <span class="company-name">AceNG</span> is a leading software and technology company at the
                            forefront of innovation in the digital landscape. We specialize in developing cutting-edge
                            solutions that empower businesses to thrive in the ever-evolving digital age.
                        </div>
                    </div>
                </div>

                <div class="grid border-bottom-1 border-400">
                    <div class="col-12">
                        <p class="text-lg">Mission:</p>
                        <div class="description">Our mission at <span class="company-name">AceNG</span> is to
                            revolutionize the way businesses operate by providing them with advanced software and
                            technology solutions that enhance efficiency, productivity, and competitiveness.</div>

                    </div>
                </div>

                <div class="grid border-bottom-1 border-400">
                    <div class="col-12">
                        <p class="text-lg">Contact Us:</p>
                        <div class="description">
                            Thank you for your interest in <span class="company-name">AceNG</span>! If you have any
                            inquiries or would like to learn more about our software and technology solutions, please
                            don't hesitate to get in touch with us.
                        </div>

                        <div class="grid contact-us-div">
                            <div class="col-12">
                                {{ ContactConfig.NAME }}

                                |

                                <a class="link" :href="`mailto:${ContactConfig.EMAIL}`" target="_blank">
                                    {{ ContactConfig.EMAIL }}
                                </a>

                                <span v-if="ContactConfig.SHOW_PHONE_NUMBER">

                                    |

                                    <a class="link" :href="`tel:+${ContactConfig.PHONE_NUMBER}`">
                                        {{ ContactConfig.PHONE_NUMBER }}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script setup>
import ContactConfig from '@/config/contact-info'

</script>
<style scoped>
.ace-ng-card {
    font-size: 16px;
}

.company-name {
    color: #000;
    background-color: var(--surface-200);
}

.description {
    color: var(--text-color-secondary);
    margin-bottom: .5rem;
}
</style>