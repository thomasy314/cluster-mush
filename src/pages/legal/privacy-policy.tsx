import { Container, Link } from "@mui/material"
import { InShort, SectionTitle } from "./doc-pieces"
import { completeMainUrl, completeShopUrl } from "../../routing/routing-path-helpers"

export const PrivacyPolicy = () => {
    return (
        <Container sx={{paddingBottom: '10vh'}}>
            <h1>Privacy Policy</h1>
            <b>Last updated May 23, 2023</b>
            <p>
                This privacy notice for Cluster Mush ("<b>Company</b>," "<b>we</b>," "<b>us</b>," or "<b>our</b>"), describes
                how and why we might collect, store, use, and/or share ("process") your information
                when you use our services ("<b>Services</b>"), such as when you:
                Visit our website at <Link href={completeMainUrl}>https://www.clustermush.com</Link> and <Link href={completeShopUrl}>https://shop.clustermush.com</Link>, or any website of ours that
                links to this privacy notice
                Engage with us in other related ways, including any sales, marketing, or
                events
            </p>
            <p>
                <b>Questions or concerns?</b> Reading this privacy notice will help you understand your
                privacy rights and choices. If you do not agree with our policies and practices, please
                do not use our Services. If you still have any questions or concerns, please contact
                us at privacy@clustermush.com.
            </p>
            <h2>SUMMARY OF KEY POINTS</h2>
            <p>

                This summary provides key points from our privacy notice, but you can find
                out more details about any of these topics by clicking the link following each
                key point or by using our <Link href="#table-of-contents">table of contents</Link> below to find the section you are
                looking for.

            </p>
            <p>
                <b>What personal information do we process?</b> When you visit, use, or navigate our
                Services, we may process personal information depending on how you interact with
                Cluster Mush and the Services, the choices you make, and the products and features
                you use. Learn more about <Link href="#personal-information-disclosure">personal information you disclose to us</Link>.
            </p>
            <p>
                <b>Do we process any sensitive personal information?</b> We do not process sensitive
                personal information.
            </p>
            <p>
                <b>Do we receive any information from third parties?</b> We do not receive any
                information from third parties
            </p>
            <p>
                <b>How do we process your information?</b> We process your information to provide,
                improve, and administer our Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your information for other
                purposes with your consent. We process your information only when we have a valid
                legal reason to do so. Learn more about <Link href="#processing-your-information">how we process your information</Link>.
            </p>
            <p>
                <b>How do we keep your information safe?</b> We have organizational and technical
                processes and procedures in place to protect your personal information. However, no
                electronic transmission over the internet or information storage technology can be
                guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
                cybercriminals, or other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your information. Learn more
                about <Link href="#how-we-protect-information">how we keep your information safe</Link>.
            </p>
            <p>
                <b>What are your rights?</b> Depending on where you are located geographically, the
                applicable privacy law may mean you have certain rights regarding your personal
                information. Learn more about <Link href="#your-privacy-rights">your privacy rights</Link>.
            </p>
            <p>
                <b>How do you exercise your rights?</b> The easiest way to exercise your rights is by
                visiting <Link href={`${completeShopUrl}/delete-my-data`}>https://shop.clustermush.com/delete-my-data</Link>, or by <Link href="/contact">contacting us</Link>. We will
                consider and act upon any request in accordance with applicable data protection
                laws.
            </p>
            <p>
                Want to learn more about what Cluster Mush does with any information we
                collect? <Link href="#table-of-contents">Review the privacy notice in full</Link>.
            </p>
            <div id="table-of-contents">
                <h2>TABLE OF CONTENTS</h2>
                <ol>
                    <li><Link href="#what-info">WHAT INFORMATION DO WE COLLECT?</Link></li>
                    <li><Link href="#processing-your-information">HOW DO WE PROCESS YOUR INFORMATION?</Link></li>
                    <li><Link href="#sharing-personal-information">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Link></li>
                    <li><Link href="#handling-your-social-logins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Link></li>
                    <li><Link href="#how-long-do-we-keep-information">HOW LONG DO WE KEEP YOUR INFORMATION?</Link></li>
                    <li><Link href="#how-we-protect-information">HOW DO WE KEEP YOUR INFORMATION SAFE?</Link></li>
                    <li><Link href="#information-from-minors">DO WE COLLECT INFORMATION FROM MINORS?</Link></li>
                    <li><Link href="#your-privacy-rights">WHAT ARE YOUR PRIVACY RIGHTS?</Link></li>
                    <li><Link href="#controls-for-do-not-track-features">CONTROLS FOR DO-NOT-TRACK FEATURES</Link></li>
                    <li><Link href="#california-specific-rights">DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Link></li>
                    <li><Link href="#do-we-update-this-notice">DO WE MAKE UPDATES TO THIS NOTIVE?</Link></li>
                    <li><Link href="#how-to-contact-us">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link></li>
                    <li><Link href="#how-to-review-update-or-delete-data">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Link></li>
                </ol>
            </div>
            <div id="what-info">
                <SectionTitle>1. WHAT INFORMATION DO WE COLLECT?</SectionTitle>
                <h3 id="personal-information-disclosure">Personal information you disclose to us</h3>
                <InShort>
                    We collect personal information that you provide to us.
                </InShort>
                <p>
                    We collect personal information that you voluntarily provide to us when you register
                    on the Services, express an interest in obtaining information about us or our products
                    and Services, when you participate in activities on the Services, or otherwise when
                    you contact us.
                </p>
                <p>
                    <b>Personal Information Provided by You</b>. The personal information that we collect
                    depends on the context of your interactions with us and the Services, the choices you
                    make, and the products and features you use. The personal information we collect
                    may include the following:
                </p>
                <ul>
                    <li>names</li>
                    <li>email addresses</li>
                    <li>mailing addresses</li>
                    <li>usernames</li>
                    <li>passwords</li>
                    <li>billing addresses</li>
                    <li>debit/credit card numbers</li>
                    <li>phone numbers</li>
                    <li>contact preferences</li>
                </ul>
                <p>
                    <b>Sensitive Information</b>. We do not process sensitive information.
                </p>
                <p>
                    <b>Payment Data</b>. We may collect data necessary to process your payment if you make
                    purchases, such as your payment instrument number, and the security code
                    associated with your payment instrument. All payment data is stored by Stripe. You
                    may find their privacy notice link(s) here: <Link href="https://stripe.com/privacy">https://stripe.com/privacy</Link>.
                </p>
                <p>
                    <b>Social Media Login Data</b>. We may provide you with the option to register with us
                    using your existing social media account details, like your Facebook, Twitter, or other
                    social media account. If you choose to register in this way, we will collect the
                    information described in the section called "<Link href="">HOW DO WE HANDLE YOUR SOCIAL
                        LOGINS?</Link>" below.
                </p>
                <p>
                    All personal information that you provide to us must be true, complete, and accurate,
                    and you must notify us of any changes to such personal information.
                </p>
                <h3>Information automatically collected</h3>
                <InShort>
                    Some information — such as your Internet Protocol (IP) address and/or
                    browser and device characteristics — is collected automatically when you visit our
                    Services.
                </InShort>
                <p>
                    We automatically collect certain information when you visit, use, or navigate the
                    Services. This information does not reveal your specific identity (like your name or
                    contact information) but may include device and usage information, such as your IP
                    address, browser and device characteristics, operating system, language
                    preferences, referring URLs, device name, country, location, information about how
                    and when you use our Services, and other technical information. This information is
                    primarily needed to maintain the security and operation of our Services, and for our
                    internal analytics and reporting purposes.
                </p>
                <p>The information we collect includes:</p>
                <ul>
                    <li>
                        <b><i>Log and Usage Data.</i></b> Log and usage data is service-related, diagnostic,
                        usage, and performance information our servers automatically collect when
                        you access or use our Services and which we record in log files. Depending on
                        how you interact with us, this log data may include your IP address, device
                        information, browser type, and settings and information about your activity in
                        the Services (such as the date/time stamps associated with your usage, pages
                        and files viewed, searches, and other actions you take such as which features
                        you use), device event information (such as system activity, error reports
                        (sometimes called "crash dumps"), and hardware settings).
                    </li>
                    <li>
                        <b><i>Device Data.</i></b> We collect device data such as information about your computer,
                        phone, tablet, or other device you use to access the Services. Depending on
                        the device used, this device data may include information such as your IP
                        address (or proxy server), device and application identification numbers,
                        location, browser type, hardware model, Internet service provider and/or
                        mobile carrier, operating system, and system configuration information.
                    </li>
                </ul>
            </div>
            <div id="processing-your-information">
                <SectionTitle>2. HOW DO WE PROCESS YOUR INFORMATION</SectionTitle>
                <InShort>
                    We process your information to provide, improve, and administer our
                    Services, communicate with you, for security and fraud prevention, and to comply
                    with law. We may also process your information for other purposes with your consent.
                </InShort>
                <p><b>
                    We process your personal information for a variety of reasons, depending on
                    how you interact with our Services, including:
                </b></p>
                <ul>
                    <li>
                        <b>To facilitate account creation and authentication and otherwise manage
                            user accounts.</b> We may process your information so you can create and log
                        in to your account, as well as keep your account in working order.
                    </li>
                    <li>
                        <b>To deliver and facilitate delivery of servies to the user.</b> We may process
                        your information to provide you with the requested service.
                    </li>
                    <li>
                        <b>To evaluate and improve our services, products, marketing, and your experience.</b> We may process your information when we believe it is
                        necessary to identify usage trends, determine the effectiveness of our
                        promotional campaigns, and to evaluate and improve our Services, products,
                        marketing, and your experience.

                    </li>
                </ul>
            </div>
            <div id="sharing-personal-information">
                <SectionTitle>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION</SectionTitle>
                <InShort>
                    We may share information in specific situations described in this section
                    and/or with the following third parties.
                </InShort>
                <p>
                    <b>Vendors, Consultants, and Other Third-Party Service Providers.</b>We may share
                    your data with third-party vendors, service providers, contractors, or agents ("<b>third
                        parties</b>") who perform services for us or on our behalf and require access to such
                    information to do that work. We have contracts in place with our third parties, which
                    are designed to help safeguard your personal information. This means that they
                    cannot do anything with your personal information unless we have instructed them to
                    do it. They will also not share your personal information with any organization apart
                    from us. They also commit to protect the data they hold on our behalf and to retain it
                    for the period we instruct. The third parties we may share personal information with
                    are as follows:
                </p>
                <ul>
                    <li>
                        <b>Allow Users to Connect to Their Third-Party Accounts</b>
                        <br />
                        Google account
                    </li>
                    <li>
                        <b>Cloud Computing Services</b>
                        <br />
                        Google Cloud Platform
                    </li>
                    <li>
                        <b>Functionality and Infrastructure Optimization</b>
                        <br />
                        Cloud Firestore, Cloud Functions for Firebase, Cloud Storage for Firebase, and Firebase Hosting
                    </li>
                    <li>
                        <b>Invoices and Billing</b>
                        <br />
                        Stripe
                    </li>
                    <li>
                        <b>Web and Mobile Analytics</b>
                        <br />
                        Google Analytics
                    </li>
                    <li>
                        <b>Website Performance Monitoring</b>
                        <br />
                        Firebase Crash Reporting and Firebase Performance Monitoring
                    </li>
                    <li>
                        <b>Website Texting</b>
                        <br />
                        Firebase Remote Config
                    </li>
                </ul>
                <p>
                    We also may need to share your personal information in the following situations:
                </p>
                <ul>
                    <li>
                        <b>Business Transfers.</b> We may share or transfer your information in connection
                        with, or during negotiations of, any merger, sale of company assets, financing,
                        or acquisition of all or a portion of our business to another company.
                    </li>
                </ul>
            </div>
            <div id="handling-your-social-logins">
                <SectionTitle>4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</SectionTitle>
                <InShort>
                    If you choose to register or log in to our Services using a social media
                    account, we may have access to certain information about you.
                </InShort>
                <p>
                    Our Services offer you the ability to register and log in using your third-party social
                    media account details (like your Facebook or Twitter logins). Where you choose to do
                    this, we will receive certain profile information about you from your social media
                    provider. The profile information we receive may vary depending on the social media
                    provider concerned, but will often include your name, email address, friends list, and
                    profile picture, as well as other information you choose to make public on such a
                    social media platform.
                </p>
                <p>
                    We will use the information we receive only for the purposes that are described in this
                    privacy notice or that are otherwise made clear to you on the relevant Services.
                    Please note that we do not control, and are not responsible for, other uses of your
                    personal information by your third-party social media provider. We recommend that
                    you review their privacy notice to understand how they collect, use, and share your
                    personal information, and how you can set your privacy preferences on their sites
                    and apps.
                </p>
            </div>
            <div id="how-long-do-we-keep-information">
                <SectionTitle>5. HOW LONG DO WE KEEP YOUR INFORMATION?</SectionTitle>
                <InShort>
                    We keep your information for as long as necessary to fulfill the purposes
                    outlined in this privacy notice unless otherwise required by law.
                </InShort>
                <p>
                    We will only keep your personal information for as long as it is necessary for the
                    purposes set out in this privacy notice, unless a longer retention period is required or
                    permitted by law (such as tax, accounting, or other legal requirements). No purpose
                    in this notice will require us keeping your personal information for longer than the
                    period of time in which users have an account with us.
                </p>
                <p>
                    When we have no ongoing legitimate business need to process your personal
                    information, we will either delete or anonymize such information, or, if this is not
                    possible (for example, because your personal information has been stored in backup
                    archives), then we will securely store your personal information and isolate it from
                    any further processing until deletion is possible.
                </p>
            </div>
            <div id="how-we-protect-information">
                <SectionTitle>6. HOW DO WE KEEP YOUR INFORMATION?</SectionTitle>
                <InShort>
                    We aim to protect your personal information through a system of
                    organizational and technical security measures.
                </InShort>
                <p>
                    We have implemented appropriate and reasonable technical and organizational
                    security measures designed to protect the security of any personal information we
                    process. However, despite our safeguards and efforts to secure your information, no
                    electronic transmission over the Internet or information storage technology can be
                    guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
                    cybercriminals, or other unauthorized third parties will not be able to defeat our
                    security and improperly collect, access, steal, or modify your information. Although
                    we will do our best to protect your personal information, transmission of personal
                    information to and from our Services is at your own risk. You should only access the
                    Services within a secure environment.
                </p>
            </div>
            <div id="information-from-minors">
                <SectionTitle>7. DO WE COLLECT INFORMATION FROM MINORS</SectionTitle>
                <InShort>
                    We do not knowingly collect data from or market to children under 18 years
                    of age
                </InShort>
                <p>
                    We do not knowingly solicit data from or market to children under 18 years of age. By
                    using the Services, you represent that you are at least 18 or that you are the parent
                    or guardian of such a minor and consent to such minor dependent’s use of the
                    Services. If we learn that personal information from users less than 18 years of age
                    has been collected, we will deactivate the account and take reasonable measures to
                    promptly delete such data from our records. If you become aware of any data we
                    may have collected from children under age 18, please contact us at
                    support@clustermush.com.
                </p>
            </div>
            <div id="your-privacy-rights">
                <SectionTitle>8. WHAT ARE YOUR PRIVACY RIGHTS?</SectionTitle>
                <InShort>You may review, change, or terminate your account at any time</InShort>
                <p>
                    If you are located in the EEA or UK and you believe we are unlawfully processing
                    your personal information, you also have the right to complain to your <Link href="https://ec.europa.eu/newsroom/article29/items/612080">Member State
                        data protection authority</Link> or <Link href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">UK data protection authority</Link>.
                </p>
                <p>
                    If you are located in Switzerland, you may contact the <Link href="https://www.edoeb.admin.ch/edoeb/en/home.html">Federal Data Protection and
                        Information Commissioner</Link>.
                </p>
                <p>
                    <b><u>Withdraing your consent:</u></b> : If we are relying on your consent to process your
                    personal information, which may be express and/or implied consent depending on
                    the applicable law, you have the right to withdraw your consent at any time. You can
                    withdraw your consent at any time by contacting us by using the contact details
                    provided in the section "<Link href="#how-to-contact-us">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>"
                    below.
                </p>
                <p>
                    However, please note that this will not affect the lawfulness of the processing before
                    its withdrawal nor, when applicable law allows, will it affect the processing of your
                    personal information conducted in reliance on lawful processing grounds other than
                    consent.
                </p>
                <p>
                    <b><u>Opting out of marketing and promotional communications</u></b> You can unsubscribe
                    from our marketing and promotional communications at any time by clicking on the
                    unsubscribe link in the emails that we send, or by contacting us using the details
                    provided in the section "<Link href="#how-to-contact-us">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>"
                    below. You will then be removed from the marketing lists. However, we may still
                    communicate with you — for example, to send you service-related messages that are
                    necessary for the administration and use of your account, to respond to service
                    requests, or for other non-marketing purposes
                </p>
                <h3>Account Information</h3>
                <p>
                    If you would at any time like to review or change the information in your account or
                    terminate your account, you can:
                </p>
                <ul>
                    <li>Contact us using the contact information provided</li>
                </ul>
                <p>
                    Upon your request to terminate your account, we will deactivate or delete your
                    account and information from our active databases. However, we may retain some
                    information in our files to prevent fraud, troubleshoot problems, assist with any
                    investigations, enforce our legal terms and/or comply with applicable legal
                    requirements.
                </p>
                <p>
                    If you have questions or comments about your privacy rights, you may email us at
                    privacy@clustermush.com.
                </p>
            </div>
            <div id="controls-for-do-not-track-features">
                <SectionTitle>9. CONTROLS FOR DO-NOT-TRACK FEATURES</SectionTitle>
                <p>
                    Most web browsers and some mobile operating systems and mobile applications
                    include a Do-Not-Track ("DNT") feature or setting you can activate to signal your
                    privacy preference not to have data about your online browsing activities monitored
                    and collected. At this stage no uniform technology standard for recognizing and
                    implementing DNT signals has been finalized. As such, we do not currently respond
                    to DNT browser signals or any other mechanism that automatically communicates
                    your choice not to be tracked online. If a standard for online tracking is adopted that
                    we must follow in the future, we will inform you about that practice in a revised
                    version of this privacy notice
                </p>
            </div>
            <div id="california-specific-rights">
                <SectionTitle>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</SectionTitle>
                <InShort>
                    Yes, if you are a resident of California, you are granted specific rights
                    regarding access to your personal information.
                </InShort>
                <p>
                    California Civil Code Section 1798.83, also known as the "Shine The Light" law,
                    permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any)
                    we disclosed to third parties for direct marketing purposes and the names and
                    addresses of all third parties with which we shared personal information in the
                    immediately preceding calendar year. If you are a California resident and would like
                    to make such a request, please submit your request in writing to us using the contact
                    information provided below.
                </p>
                <p>
                    If you are under 18 years of age, reside in California, and have a registered account
                    with Services, you have the right to request removal of unwanted data that you
                    publicly post on the Services. To request removal of such data, please contact us
                    using the contact information provided below and include the email address
                    associated with your account and a statement that you reside in California. We will
                    make sure the data is not publicly displayed on the Services, but please be aware
                    that the data may not be completely or comprehensively removed from all our
                    systems (e.g., backups, etc.).
                </p>
            </div>
            <div id="do-we-update-this-notice">
                <SectionTitle>11. DO WE MAKE UPDATES TO THIS NOTICE?</SectionTitle>
                <InShort>
                    Yes, we will update this notice as necessary to stay compliant with relevant
                    laws.
                </InShort>
                <p>
                    We may update this privacy notice from time to time. The updated version will be
                    indicated by an updated "Revised" date and the updated version will be effective as
                    soon as it is accessible. If we make material changes to this privacy notice, we may
                    notify you either by prominently posting a notice of such changes or by directly
                    sending you a notification. We encourage you to review this privacy notice frequently
                    to be informed of how we are protecting your information.
                </p>
            </div>
            <div id="how-to-contact-us">
                <SectionTitle>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</SectionTitle>
                <p>
                    If you have questions or comments about this notice, you may email us at
                    privacy@clustermush.com
                </p>
            </div>
            <div id="how-to-review-update-or-delete-data">
                <SectionTitle>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</SectionTitle>
                <p>
                    Based on the applicable laws of your country, you may have the right to request
                    access to the personal information we collect from you, change that information, or
                    delete it. To request to review, update, or delete your personal information, please
                    visit the Cluster Mush delete my data page: (<Link href={`${completeShopUrl}/delete-my-data`}>https://shop.clustermush.com/delete-my-data</Link>).
                </p>
            </div>
        </Container>
    )
}