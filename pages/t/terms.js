import Head from "next/head";
import Layout from "../../components/Layout";
import { getData } from "../../lib/api";
import { SITE_META } from "../../lib/constants";

export default function Terms({ data }) {
  return (
    <>
      <Head>
        <title>{`Terms of Use | ${SITE_META.NAME}`}</title>
      </Head>
      <Layout navItems={data}>
        <div className="page container mx-auto">
          <h1 className="page-title">Terms of Use</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `
        <p>
          Welcome to ${SITE_META.DOMAIN}, your perfect place to post your
          information about influencers.
        </p>
        <p>
          Please read these Terms of use carefully before using the website
          operated by ${SITE_META.DOMAIN}. Your access to and use of the Service
          is conditioned on your acceptance of and compliance with these Terms.
          These Terms apply to all visitors, users and others who access or use
          the Service. By accessing or using the Service you agree to be bound
          by these Terms. If you disagree with any part of the terms then you
          may not access the Service.
        </p>
        <h2>1. Payment</h2>
        <p>
          All payments will be processed through a third-party payment
          processor. We do not store any credit card information on our servers.
          <br />
          We may provide you with access to third party payment gateways such as
          PayPal.
          <br />
          If you have any questions about our payment process or need assistance
          with making a payment, please contact us.
        </p>
        <h2>2. Use of this site</h2>
        <p>
          By accepting these Terms of Use through your use of the Site, you
          certify that you are 18 years of age or older. If you are under the
          age of 18 but at least 13 years of age you may use this Site only
          under the supervision of a parent or legal guardian who agrees to be
          bound by these Terms of Use. ${SITE_META.DOMAIN} does not intentionally
          collect personal information about children under the age of 13.
          Children under the age of 13 may not use this Site and parents or
          legal guardians may not agree to these Terms of Use on their behalf.
          If you are a parent or legal guardian agreeing to these Terms of Use
          for the benefit of a child between the ages of 13 and 18, be advised
          that you are fully responsible for his or her use of this Site,
          including all financial charges and legal liability that he or she may
          incur. If you do not agree to (or cannot comply with) any of these
          terms and conditions, do not use this Site. All billing and
          registration information provided must be truthful and accurate.
          Providing any untruthful or inaccurate information may constitute a
          breach of these Terms of Use. By confirming your purchase at the end
          of the checkout process, you agree to accept and pay for the item(s)
          requested.
        </p>
        <h2>3. Privacy</h2>
        <p>
          The terms on which we collect, use and disclose your personal
          information are set out in our Privacy Policy.
        </p>
        <h2>4. UPDATES TO THESE TERMS</h2>
        <p>
          We reserve the right, in our discretion, to correct any errors or
          omissions in any part of the Site and Services. Any material on the
          Site and Services may be out of date at any given time and we are
          under no obligation to update such material.
        </p>
        <p>
          We reserve the right, in our sole discretion, to change, modify, add
          or remove any part of these Terms, in whole or in part, at any time.
          Notification of the changes to these Terms will be posted on the Site
          and will be effective immediately, unless expressed otherwise. It is
          your sole responsibility to periodically check these Terms for any
          changes. If you do not agree with any of the changes to these Terms,
          it is your sole responsibility to unsubscribe from the Site and
          Services. Your continued use of the Site and Services will be deemed
          as your acceptance thereof.
        </p>
        <p>
          We may assign or sublicense any of our rights or obligations under
          these Terms at any time, without obtaining your consent.
        </p>
        <h2>5. SALE TERMS</h2>
        <p>
          At the moment of purchase, you are entering into an agreement with
          ${SITE_META.DOMAIN}. You acknowledge and agree that any purchase of
          products made through the Site are covered by our Delivery and Returns
          and Exchanges terms and conditions and clause 11 below.
        </p>
        <h2>6. Product Disclaimer</h2>
        <p>
          ${SITE_META.DOMAIN} is a public forum which lists collaboration
          information posted by brands and influencers. We consistently attach
          tremendous importance to any IPR issue, and are firmly against any
          infringement of IPR. Those infringement issues not only violate the
          interests of related Brands but also infringe our customers' rights.
          If you find such infringement on our site, please give us feedback so
          we can take action immediately.
        </p>
        <h2>7. Limitation of Liability</h2>
        <p>
          Under no circumstances and under no legal or equitable theory, whether
          in tort, contract, strict liability or otherwise, shall
          ${SITE_META.DOMAIN} or any of its employees, directors, officers,
          agents, vendors or suppliers be liable to you or to any other person
          for any indirect, special, incidental or consequential losses or
          damages of any nature arising out of or in connection with the use of
          or inability to use the ${SITE_META.DOMAIN} web site, including,
          without limitation, damages for lost profits, loss of goodwill, loss
          of data, work stoppage, accuracy of results, or computer failure or
          malfunction, even if an authorized representative of
          ${SITE_META.DOMAIN} has been advised of or should have known of the
          possibility of such damages.
        </p>
        <h2>8. Order Acceptance</h2>
        <p>
          Please note that there may be certain orders that we are unable to
          accept and must cancel. We reserve the right, at our sole discretion,
          to refuse or cancel any order for any reason. Some situations that may
          result in your order being canceled include limitations on quantities
          available for purchase, inaccuracies or errors in product or pricing
          information, or problems identified by our credit and fraud avoidance
          department. We may also require additional verifications or
          information before accepting any order We will contact you if all or
          any portion of your order is canceled or if additional information is
          required to accept your order.
        </p>
        <h2>9. Force Majeure</h2>
        <p>
          ${SITE_META.DOMAIN} shall not be held responsible for the delay in
          shipment or non-delivery of the goods due to war; earthquake, serious
          flooding, fire and other Force majeure causes agreed by both parties.
          However,
          ${SITE_META.DOMAIN} shall advise the Buyers by fax/telex immediately of
          such occurrence and within fourteen days thereafter; shall send by
          airmail to the Buyers for their acceptance a certificate issued by the
          competent authorities of the place where the accident occurred as
          evidence thereof. Under such circumstances ${SITE_META.DOMAIN},
          however, is still under the obligation to take all necessary measures
          to hasten the delivery of the goods. In case the late delivery exceeds
          ten weeks, the Buyers shall have the right to cancel this Contract.
        </p>
        <p>
          <strong>ADBEE TECH LIMITED</strong>
        </p>
        <p>
          UNIT 408B, LIPPOSUN PLAZA,28 CANTONROAD, TSIMSHATSUI, KOWLOON, HONG
          KONG
        </p>
        <p>Laws of Hong Kong.</p>`,
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
