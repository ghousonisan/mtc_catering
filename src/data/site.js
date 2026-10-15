export const CONTACT = {
    address: 'Mettusalai, Illupur, Tamil Nadu 622102',
    phones: ['+91 99429 88522', '+91 73396 21425'],
    email: 'mtchm2007@gmail.com',
    paymentsEmail: 'mtconlinepayments@gmail.com',
    // Pin for "Mother Teresa Group of Institutions" (from the shared Google Maps link)
    mapCoords: '10.4979607,78.6429119',
    mapLink: 'https://maps.app.goo.gl/WnmwZmtwcaj8JrqE7'
}

export const ACADEMICS = [
    { label: 'Diploma', to: '/academics/diploma' },
    { label: 'B.Sc.', to: '/academics/bsc' },
    { label: 'Certification Course', to: '/academics/certificate' }
]

export const LIFE = [
    { label: 'Facilities', to: '/facilities' },
    { label: 'Events & News', to: '/events' },
    { label: 'Gallery', to: '/gallery' }
]

// `children` items render as a dropdown; items without `to` have no page yet.
export const NAV_LINKS = [
    { key: 'home', label: 'Home', to: '/' },
    { key: 'about', label: 'About Us', to: '/about' },
    { key: 'academics', label: 'Academics', children: ACADEMICS },
    { key: 'life', label: 'Life@HMCT', children: LIFE },
    { key: 'accreditations', label: 'Accreditations' },
    { key: 'contact', label: 'Contact Us', to: '/contact' }
]

export const PROGRAM_OPTIONS = [
    { degree: 'Diploma', programs: ['Diploma in Hotel Management (1 Year)', 'Diploma in Hotel Management (3 Years)'] },
    { degree: 'B.Sc.', programs: ['B.Sc. Hotel Management & Catering Technology'] },
    { degree: 'Certificate', programs: ['Certificate Course in Hospitality & Catering'] }
]

export const LEGAL_PAGES = {
    terms: {
        eyebrow: 'Legal Information',
        title: 'Terms & Conditions',
        intro: 'Please read our terms and conditions carefully to understand the rules, responsibilities, and guidelines for using the Mother Teresa College of Hotel Management & Catering Technology website and services.',
        sections: [
            {
                title: 'Services',
                paragraphs: [
                    'Our website provides a platform for users to conveniently pay fees online.',
                    'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.'
                ]
            },
            {
                title: 'Fees',
                paragraphs: [
                    'Fees for services rendered are clearly outlined on our website.',
                    'Payment processing fees may apply and will be disclosed prior to payment.',
                    'All fees are non-refundable unless otherwise stated.'
                ]
            },
            {
                title: 'User Accounts',
                paragraphs: [
                    'To access certain features of our services, you may be required to create an account.',
                    'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
                    'You agree to provide accurate, current, and complete information during the registration process.'
                ]
            },
            {
                title: 'Payment',
                paragraphs: [
                    'By using our payment services, you agree to provide accurate and complete payment information.',
                    'Payments made through our platform are processed securely.',
                    'We are not responsible for any errors or delays in processing payments that result from incorrect payment information provided by the user.'
                ]
            },
            {
                title: 'Intellectual Property',
                paragraphs: [
                    'The content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Mother Teresa Hotel Management & Catering Technology and is protected by copyright laws.',
                    'You may not reproduce, distribute, modify, transmit, or use the content of this website for any commercial purpose without prior written consent from us.'
                ]
            },
            {
                title: 'Limitation of Liability',
                paragraphs: [
                    'We are not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.',
                    'We do not guarantee the accuracy, completeness, or reliability of any content posted on our website.'
                ]
            },
            {
                title: 'Governing Law',
                paragraphs: [
                    'These terms and conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.'
                ]
            },
            {
                title: 'Changes to Terms',
                paragraphs: [
                    'We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the website after any such changes constitutes your acceptance of the new terms and conditions.'
                ]
            },
            {
                title: 'Contact Information',
                paragraphs: [
                    `If you have any questions or concerns about these terms and conditions, please contact us at ${CONTACT.paymentsEmail}`
                ]
            }
        ]
    },
    privacy: {
        eyebrow: 'Privacy & Security',
        title: 'Privacy Policy',
        intro: 'Your privacy is important to us. Learn how we collect, use, protect, and manage your personal information while ensuring a secure and transparent online experience.',
        sections: [
            {
                title: 'Information We Collect',
                paragraphs: [
                    { lead: 'Personal Information:', text: 'When you use our services, we may collect personal information such as your name, email address, phone number, billing address, and payment information.' },
                    { lead: 'Usage Data:', text: 'We may also collect information about how you interact with our website, including your IP address, browser type, pages visited, and other usage data.' }
                ]
            },
            {
                title: 'How We Use Your Information',
                paragraphs: [
                    { lead: 'To Provide Services:', text: 'We use your personal information to process payments, provide customer support, and facilitate communication related to your account.' },
                    { lead: 'To Improve Our Services:', text: 'We may use usage data to analyse trends, monitor the performance of our website, and make improvements to enhance user experience.' }
                ]
            },
            {
                title: 'Data Security',
                paragraphs: [
                    'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
                    'However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.'
                ]
            },
            {
                title: 'Disclosure of Information',
                paragraphs: [
                    'We may disclose your personal information to third-party service providers who assist us in operating our website, conducting business, or serving you, as long as they agree to keep this information confidential.',
                    'We may also disclose your information when we believe it is necessary to comply with the law, enforce our site policies, or protect ours or others’ rights, property, or safety.'
                ]
            },
            {
                title: 'Third-Party Links',
                paragraphs: [
                    'Our website may contain links to third-party websites. These third-party sites have their own privacy policies, and we are not responsible for the privacy practices or content of such websites.'
                ]
            },
            {
                title: 'Children’s Privacy',
                paragraphs: [
                    'Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18 years of age. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.'
                ]
            },
            {
                title: 'Changes to Privacy Policy',
                paragraphs: [
                    'We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated policy on this page.'
                ]
            },
            {
                title: 'Contact Us',
                paragraphs: [
                    `If you have any questions or concerns about our Privacy Policy, please contact us at ${CONTACT.paymentsEmail}`
                ]
            }
        ]
    },
    refund: {
        eyebrow: 'Payments & Refunds',
        title: 'Return & Refund Policy',
        intro: 'Understand our return and refund guidelines, including eligibility, processing timelines, and the conditions applicable to payments made through our website.',
        sections: [
            {
                title: 'Refund Eligibility',
                paragraphs: [
                    'Fees paid through our platform are generally non-refundable. However, we may consider refunds in the following circumstances:'
                ],
                bullets: [
                    { lead: 'Duplicate payments:', text: 'If you accidentally make duplicate payments for the same service, you may be eligible for a refund of the duplicate amount.' },
                    { lead: 'Processing errors:', text: 'If there is an error in processing your payment that results in an overcharge or incorrect amount being deducted, you may be eligible for a refund of the excess amount.' },
                    { lead: 'Service cancellation:', text: 'If the service for which you paid fees is cancelled or terminated by us, you will be eligible for a refund of the fees paid for the cancelled service.' }
                ]
            },
            {
                title: 'Refund Procedure',
                paragraphs: [
                    'To request a refund, please contact our customer support team within 10 days of the payment date. You may be required to provide proof of the payment and details of the refund request.',
                    'Refunds will be processed within a reasonable timeframe after the request is approved. The refund amount will be credited back to the original payment method used for the transaction.'
                ]
            },
            {
                title: 'No Refund Policy Exceptions',
                paragraphs: [
                    'Fees paid for services rendered, including but not limited to administrative fees, processing fees, and convenience fees, are generally non-refundable.',
                    'No refunds will be provided for fees paid for services that have already been rendered or completed.'
                ]
            },
            {
                title: 'Contact Us',
                paragraphs: [
                    `If you have any questions or concerns about our Return or Refund Policy, please contact us at ${CONTACT.paymentsEmail}`
                ]
            }
        ]
    },
    cancellation: {
        eyebrow: 'Cancellations & Policies',
        title: 'Cancellation Policy',
        intro: 'Review our cancellation policy to understand the procedures, eligibility, and conditions for cancelling services, registrations, or payments.',
        sections: [
            {
                title: 'Cancellation Eligibility',
                paragraphs: [
                    'Cancellation of fees paid through our platform is subject to the following conditions: Cancellation must be requested within 3 days of the payment date. Cancellation requests must be submitted through our website or by contacting our customer support team.'
                ]
            },
            {
                title: 'Cancellation Procedure',
                paragraphs: [
                    'To request a cancellation, please log in to your account on our website and navigate to the relevant payment or service. Follow the cancellation instructions provided or contact our customer support team for assistance.',
                    'Cancellations requested within the eligible timeframe will be processed as soon as possible. Any applicable refunds will be issued in accordance with our Refund Policy.'
                ]
            },
            {
                title: 'No Cancellation Policy Exceptions',
                paragraphs: [
                    'Some fees paid through our platform may be non-cancellable or subject to specific cancellation terms and conditions as outlined in the service agreement or terms of use.',
                    'We reserve the right to refuse cancellation requests that do not meet the eligibility criteria or are in violation of our terms and conditions.'
                ]
            },
            {
                title: 'Contact Us',
                paragraphs: [
                    `If you have any questions or concerns about our Cancellation Policy, please contact us at ${CONTACT.paymentsEmail}`
                ]
            }
        ]
    }
}
