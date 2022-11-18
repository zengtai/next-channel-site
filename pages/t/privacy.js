import Head from "next/head";
import Layout from "../../components/Layout";
import { getData } from "../../lib/api";
import { SITE_META } from "../../lib/constants";

export default function Privacy({ data }) {
  return (
    <>
      <Head>
        <title>{`Privacy Policy | ${SITE_META.NAME}`}</title>
      </Head>
      <Layout navItems={data}>
        <div className="page container mx-auto">
          <h1 className="page-title">Privacy Policy</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `
        <p>Thank you for visiting ${SITE_META.DOMAIN}.</p>
        <p>
          This privacy and security policy (the "Policy") explains the
          information we collect about you on the Website, as well as
          information collected when you visit our stores or otherwise
          communicate or intera ${SITE_META.DOMAIN} pluson Me, how we use the
          personal data information, some of the security steps taken to protect
          the information, and the choices you have to review, revise and/or
          restrict our usage of this information.
        </p>
        <p>
          This Policy is part of the Terms & Conditions of Use that govern the
          Website and is binding on all Website users.
        </p>
        <p>
          If you have any objections to this Privacy Policy, you should
          immediately discontinue use of the website.
        </p>
        <h2>1. How do we use your personal data?</h2>
        <p>
          In providing your personal data you consent to ${SITE_META.DOMAIN} 
          using the data collected in order to meet our commitments to you and
          to provide you with the service you expect. We need your personal data
          for the following purposes:
        </p>
        <ul>
          <li>
            To create your personal account at ${SITE_META.DOMAIN} (e.g. your
            name and email address)
          </li>
          <li>
            To process your orders (e.g. your name, address and bank details)
          </li>
          <li>
            To be able to send text message notifications of delivery status
            (e.g. your mobile phone number)
          </li>
          <li>
            To be able to send you marketing offers such as newsletters and our
            catalogues (e.g. your email address, your name)
          </li>
          <li>
            To be able to contact you in the event of any problem with the
            delivery of your items (e.g. telephone number; address)
          </li>
          <li>
            To enable us to answer your queries and to inform you of new or
            changed services (e.g. your email address)
          </li>
        </ul>
        <p>
          We will only keep your data for as long as necessary to carry out our
          services to you or as long as we are required by law.
        </p>
        <p>
          We cannot remove your data when there is a legal storage requirement,
          such as book keeping rules or when there is a legal ground to keep the
          data, such as an on-going contractual relationship.
        </p>
        <p>
          Non-personal data is used as described above and in other ways as
          permitted by applicable laws, including combining non-personal data
          with personal data.
        </p>
        <p>
          In addition, we monitor site use and traffic patterns to improve our
          web site design and the products and services we offer as well as to
          determine what offers, promotions or information to send to you.
        </p>
        <p>
          To serve you better; we may combine Personal Information you give us
          online, via mobile device, in our stores, or through our customer
          service call center.
        </p>
        <p>
          We may also combine that information with publicly available
          information and information we receive from cross-reference with
          select partners and others. By combining this information, we are
          better able to communicate with you about our products and services,
          special events and promotions, and better able to personalize your
          shopping experience.
        </p>

        <h2>
          2. You have the right to request information about the personal data
          we hold on you.
        </h2>
        <p>
          If your data is incorrect, incomplete or irrelevant you can ask to
          have the information corrected or removed. Annually, you also have the
          right to request written documentation, free of charge, on the
          personal information we have on you on our account files.
        </p>
        <p>
          To request this document please write in to ${SITE_META.DOMAIN} 
          Customer Service. You can withdraw your consent to us using the data
          for marketing purposes at any time (i.e., sending catalogues.
          Newsletters or offers). You can contact us by telephone or by e-mail.
        </p>

        <h2>
          3. You can access your personal account to update your personal data.
        </h2>
        <p>
          Please note, however, that your personal account information is
          protected by your user name and password.
        </p>
        <p>
          It is your responsibility to maintain the security of your username
          and password as any actions taken while logged into your account will
          be your responsibility.
        </p>
        <h2>4. We do not sell your information to third parties.</h2>
        <p>
          We do, however, share data with third parties when necessary to
          fulfill a transaction, complete a service, for administrative
          purposes, or when required by law. ${SITE_META.DOMAIN} is a public
          forum where everyone can post their collaboration information and
          contacts and personal information. The information you posted means
          you agree to reveal your information to public users on this website.
          You have got the choice to publish your contact information to
          herasboxy's registered account.
        </p>
        <p>
          Any data that is forwarded to third parties is used to meet
          ${SITE_META.DOMAIN}'s commitments to ${SITE_META.DOMAIN}
        </p>
        <p>
          Additionally, we will share your data if such sharing is required by
          law or to protect against potential or suspected fraud. Also,
          ${SITE_META.DOMAIN}usMe undergoes a merger, corporate reorganization,
          or all or part of our assets are sold or acquired by another party,
          your personal data may be shared. If you do not want us to share your
          personal data in these manners, please do not provide it to us.
        </p>
        <h2>5. Cookie.</h2>
        <p>
          A cookie is a piece of data stored on the user's hard drive containing
          information about the user We use both session and persistent cookies.
          Cookies enable us to track and target the interests of our users in
          the aggregate by analyzing popular areas and products to enhance
          future experiences on our site.
        </p>
        <p>
          Cookies do not cause damage to your computer systems or files, and
          only the web site that transferred a particular cookie to you can
          read, modify or delete such cookie.
        </p>
        <p>
          If you do not want information collected through the use of cookies,
          there are simple procedures in most browsers that allow you to delete
          existing cookies, to automatically decline cookies, or to be given the
          choice of declining or accepting the transfer of particular cookies to
          your computer.
        </p>
        <p>
          You can easily erase cookies from your computer or mobile device using
          your browser. For instructions on how to handle and delete cookies
          please look under "Help" in your browser.
        </p>
        <p>
          You can choose to disable cookies, or to receive a notification each
          time a new cookie is sent to your computer or mobile device. However,
          please note that if you choose to disable cookies, you will not be
          able to take advantage of all features.
        </p>
        <h2>6. Security.</h2>
        <p>
          ${SITE_META.DOMAIN} takes every precaution to protect our user's
          information.
        </p>
        <p>
          When our registration/order form asks users to enter sensitive
          information (such as credit card number and/or social security
          number), that information is encrypted and is protected with the
          Secure Socket Layers (SSLs) encryption software. While on a secure
          page, such as our order form, a lock icon appears on the bottom of
          your Web browser.
        </p>
        <p>
          When you are not on a secure page, no lock icon will appear In
          addition, the servers that we store personally identifiable
          information on are kept in a secure environment under restricted
          access. However, security systems are not infallible, including
          encryption systems.
        </p>
        <p>
          While we use reasonable efforts to protect your personal information,
          we cannot guarantee its absolute security.
        </p>
        <p>
          If you have any questions about the security at our website, please
          send us an e-mail at service@${SITE_META.DOMAIN} for more info.
        </p>
        <h2>7. Supplementation of Information.</h2>
        <p>
          In order for ${SITE_META.DOMAIN} to property fullfil its obligation to
          our customers, it is necessary for us to supplement the information we
          receive with information from third party sources such as our
          affiliated websites.
        </p>
        <p>
          For example, we will combine information about the purchasing habits
          of users with similar information from our affiliated sites.
        </p>
        <p>
          When a user makes a purchase from any of these companies, the
          companies collect and share that purchase information with us so we
          can tailor the site to our users' preferences.
        </p>
        <p>
          If a user's personally identifiable information changes (such as your
          zip code, phone, e-mail or postal address), or if a user no longer
          desires our service, we provide a way to correct, update or
          delete/deactivate that user's personally identifiable information
          provided to us. This can be done by using the unsubscribe feature in
          our communication.
        </p>
        <p>
          Changes to This Policy, We reserve the right to change this privacy
          policy, and any of our policies or procedures concerning the treatment
          of information collected through the site, without prior notice. You
          can determine when this privacy policy was last revised by referring
          to date at the top of this page. Any changes to our privacy policy
          will become effective upon posting of the revised policy on the
          Internet, accessible through the site. Use of the site following such
          changes constitutes your acceptance of the revised policy then in
          effect. We encourage you to periodically review our privacy policy to
          ensure familiarity with our most current version.
        </p>`,
            }}
          />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const data = await getData(`category`);

  return {
    props: {
      data,
    },
  };
};
