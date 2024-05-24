<template>
    <!-- <p class="text-lg">Contact Us:</p> -->
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
</template>
<script setup>
import ContactConfig from '@/config/contact-info'
</script>