import React from "react";
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";

const PrivacyPolicy = () => {
  // window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <main>
      {/* <!--------------Breadcrumb-----------------------> */}
      <div className="flex items-center px-4 pt-6 text-sm font-medium uppercase text-gray-500 sm:px-10 xl:px-24">
        {/* <!--------------> */}
        <a className=" flex items-center hover:text-primary" href="index.html">
          <span>
            <FcAbout className="mr-1 h-4 w-4" />
          </span>
          <span>ABOUT US</span>
        </a>
        {/* <!--------------> */}
        <span className=" mx-1 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        {/* <!--------------> */}
        <Link to={"/privacy-policy"} className="cursor-pointer text-gray-400">
          Privacy Policy
        </Link>
      </div>
      {/* <!--------------Breadcrumb End-----------> */}
      <section className="mb-20 px-4 pt-5 sm:mb-40 sm:px-10 xl:px-24">
        {/* <!------001-------> */}
        <div className=" mt-5 text-gray-500">
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            PRIVACY POLICY
          </h4>
          <br />
          We care about data privacy and security. By using the Site, you agree
          to be bound by our Privacy Policy, which is incorporated into these
          Terms and Conditions. Please be advised the Site is hosted in the
          United States.
          <br />
          If you access the Site from the European Union, Asia, or any other
          region of the world with laws or other requirements governing personal
          data collection, use, or disclosure that differ from applicable laws
          in the United States, then through your continued use of the Site, you
          are transferring your data to the United States, and you expressly
          consent to have your data transferred to and processed in the United
          States.
          <br />
          Further, we do not knowingly accept, request, or solicit information
          from children or knowingly market to children. Therefore, in
          accordance with the U.S. Children’s Online Privacy Protection Act, if
          we receive actual knowledge that anyone under the age of 13 has
          provided personal information to us without the requisite and
          verifiable parental consent, we will delete that information from the
          Site as quickly as is reasonably practical.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY
          </h4>
          <br />
          <h3 className="font-bold">Counter Notification</h3>
          We respect the intellectual property rights of others. If you believe
          that any material available on or through the Site infringes upon any
          copyright you own or control, please immediately notify our Designated
          Copyright Agent using the contact information provided below a
          “Notification”.
          <br />
          A copy of your Notification will be sent to the person who posted or
          stored the material addressed in the Notification. Please be advised
          that pursuant to federal law you may be held liable for damages if you
          make material misrepresentations in a Notification. Thus, if you are
          not sure that material located on or linked to by the Site infringes
          your copyright, you should consider first contacting an attorney.
          <br />
          All Notifications should meet the requirements of DMCA 17 U.S.C.
          §512C3 and include the following information:
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li>
              A physical or electronic signature of a person authorized to act
              on behalf of the owner of an exclusive right that is allegedly
              infringed;
            </li>

            <li>
              Identification of the copyrighted work claimed to have been
              infringed, or, if multiple copyrighted works on the Site are
              covered by the Notification, a representative list of such works
              on the Site;
            </li>

            <li>
              Identification of the material that is claimed to be infringing or
              to be the subject of infringing activity and that is to be removed
              or access to which is to be disabled, and information reasonably
              sufficient to permit us to locate the material;
            </li>

            <li>
              Information reasonably sufficient to permit us to contact the
              complaining party, such as an address, telephone number, and, if
              available, an email address at which the complaining party may be
              contacted;
            </li>

            <li>
              A statement that the complaining party has a good faith belief
              that use of the material in the manner complained of is not
              authorized by the copyright owner, its agent, or the law;
            </li>

            <li>
              A statement that the information in the notification is accurate,
              and under penalty of perjury, that the complaining party is
              authorized to act on behalf of the owner of an exclusive right
              that is allegedly infringed upon.
            </li>
          </ul>
          <h3 className="font-bold">Counter Notification</h3>
          If you believe your own copyrighted material has been removed from the
          Site as a result of a mistake or misidentification, you may submit a
          written counter notification to [us/our Designated Copyright Agent]
          using the contact information provided below (a “Counter
          Notification”).
          <br />
          To be an effective Counter Notification under the DMCA, your Counter
          Notification must include substantially the following:
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li>
              Identification of the material that has been removed or disabled
              and the location at which the material appeared before it was
              removed or disabled;
            </li>

            <li>
              A statement that you consent to the jurisdiction of the Federal
              District Court in which your address is located, or if your
              address is outside the United States, for any judicial district in
              which we are located;
            </li>

            <li>
              A statement that you will accept service of process from the party
              that filed the Notification or the party's agent;
            </li>

            <li>Your name, address, and telephone number;</li>

            <li>
              A statement under penalty of perjury that you have a good faith
              belief that the material in question was removed or disabled as a
              result of a mistake or misidentification of the material to be
              removed or disabled;
            </li>

            <li>Your physical or electronic signature.</li>
          </ul>
          If you send us a valid, written Counter Notification meeting the
          requirements described above, we will restore your removed or disabled
          material, unless we first receive notice from the party filing the
          Notification informing us that such party has filed a court action to
          restrain you from engaging in infringing activity related to the
          material in question.
          <br />
          Please note that if you materially misrepresent that the disabled or
          removed content was removed by mistake or misidentification, you may
          be liable for damages, including costs and attorney's fees. Filing a
          false Counter Notification constitutes perjury.
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li className=" mb-4 text-gray-500">
              <span className=" inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill h-4 w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </span>
              <span className=" ml-3"> New Delhi, India</span>
            </li>
            <li className="mb-4 text-gray-500">
              <a href="tel:+8801741909998">
                <span className=" inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-telephone-fill h-4 w-4"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                </span>
                <span className="ml-3">(+91)1234567890</span>
              </a>
            </li>
            <li className="mb-4 text-gray-500">
              <a href="mailto:simonakash310@gmail.com">
                <span className=" inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-envelope h-4 w-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                  </svg>
                </span>
                <span className=" ml-3">simonakash310@gmail.com</span>
              </a>
            </li>
            <li className=" mb-4 text-gray-500">
              <span className=" inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-clock h-4 w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
              </span>
              <span className=" ml-3">Open Time: 8:00AM - 6:00PM</span>
            </li>
          </ul>
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            COPYRIGHT INFRINGEMENTS
          </h4>
          <br />
          We respect the intellectual property rights of others. If you believe
          that any material available on or through the Site infringes upon any
          copyright you own or control, please immediately notify us using the
          contact information provided below (a “Notification”). A copy of your
          Notification will be sent to the person who posted or stored the
          material addressed in the Notification.
          <br />
          Please be advised that pursuant to federal law you may be held liable
          for damages if you make material misrepresentations in a Notification.
          Thus, if you are not sure that material located on or linked to by the
          Site infringes your copyright, you should consider first contacting an
          attorney.]
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            TERM AND TERMINATION
          </h4>
          <br />
          These Terms and Conditions shall remain in full force and effect while
          you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS
          AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
          WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE
          (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
          REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF
          ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS AND
          CONDITIONS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
          YOUR USE OR PARTICIPATION IN THE SITE OR DELETE [YOUR ACCOUNT AND] ANY
          CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING,
          IN OUR SOLE DISCRETION.
          <br />
          If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party.
          <br />
          In addition to terminating or suspending your account, we reserve the
          right to take appropriate legal action, including without limitation
          pursuing civil, criminal, and injunctive redress.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            MODIFICATIONS AND INTERRUPTIONS{" "}
          </h4>
          <br />
          We reserve the right to change, modify, or remove the contents of the
          Site at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Site. We also reserve the right to modify or discontinue all or
          part of the Site without notice at any time.
          <br />
          We will not be liable to you or any third party for any modification,
          price change, suspension, or discontinuance of the Site.
          <br />
          We cannot guarantee the Site will be available at all times. We may
          experience hardware, software, or other problems or need to perform
          maintenance related to the Site, resulting in interruptions, delays,
          or errors.
          <br />
          We reserve the right to change, revise, update, suspend, discontinue,
          or otherwise modify the Site at any time or for any reason without
          notice to you. You agree that we have no liability whatsoever for any
          loss, damage, or inconvenience caused by your inability to access or
          use the Site during any downtime or discontinuance of the Site.
          <br />
          Nothing in these Terms and Conditions will be construed to obligate us
          to maintain and support the Site or to supply any corrections,
          updates, or releases in connection therewith.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            GOVERNING LAW{" "}
          </h4>
          <br />
          These Terms and Conditions and your use of the Site are governed by
          and construed in accordance with the laws of the State of [name of
          state] applicable to agreements made and to be entirely performed
          within the State/Commonwealth of [name of state], without regard to
          its conflict of law principles.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            DISPUTE RESOLUTION
          </h4>
          <br />
          <strong>
            Option 1: Any legal action of whatever nature brought by either you
            or us (collectively, the “Parties” and individually, a “Party”)
          </strong>
          shall be commenced or prosecuted in the state and federal courts
          located in [name of county] County, [name of state], and the Parties
          hereby consent to, and waive all defenses of lack of personal
          jurisdiction and forum non conveniens with respect to venue and
          jurisdiction in such state and federal courts.
          <br />
          Application of the United Nations Convention on Contracts for the
          International Sale of Goods and the Uniform Computer Information
          Transaction Act (UCITA) are excluded from these Terms and Conditions.
          In no event shall any claim, action, or proceeding brought by either
          Party related in any way to the Site be commenced more than ______
          years after the cause of action arose.
          <br />
          <br />
          <strong>Option 2: Informal Negotiations: </strong>
          To expedite resolution and control the cost of any dispute,
          controversy, or claim related to these Terms and Conditions (each a
          "Dispute" and collectively, the “Disputes”) brought by either you or
          us (individually, a “Party” and collectively, the “Parties”), the
          Parties agree to first attempt to negotiate any Dispute (except those
          Disputes expressly provided below) informally for at least ______ days
          before initiating arbitration. Such informal negotiations commence
          upon written notice from one Party to the other Party.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            Binding Arbitration
          </h4>
          <br />
          If the Parties are unable to resolve a Dispute through informal
          negotiations, the Dispute (except those Disputes expressly excluded
          below) will be finally and exclusively resolved by binding
          arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD
          HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
          <br />
          The arbitration shall be commenced and conducted under the Commercial
          Arbitration Rules of the American Arbitration Association ("AAA") and,
          where appropriate, the AAA’s Supplementary Procedures for Consumer
          Related Disputes ("AAA Consumer Rules"), both of which are available
          at the AAA website www.adr.org.
          <br />
          Your arbitration fees and your share of arbitrator compensation shall
          be governed by the AAA Consumer Rules and, where appropriate, limited
          by the AAA Consumer Rules. [If such costs are determined to by the
          arbitrator to be excessive, we will pay all arbitration fees and
          expenses.]
          <br />
          The arbitration may be conducted in person, through the submission of
          documents, by phone, or online. The arbitrator will make a decision in
          writing, but need not provide a statement of reasons unless requested
          by either Party.
          <br />
          The arbitrator must follow applicable law, and any award may be
          challenged if the arbitrator fails to do so. Except where otherwise
          required by the applicable AAA rules or applicable law, the
          arbitration will take place in [name of county] County, [name of
          state].
          <br />
          Except as otherwise provided herein, the Parties may litigate in court
          to compel arbitration, stay proceedings pending arbitration, or to
          confirm, modify, vacate, or enter judgment on the award entered by the
          arbitrator.
          <br />
          If for any reason, a Dispute proceeds in court rather than
          arbitration, the Dispute shall be commenced or prosecuted in the state
          and federal courts located in [name of county] County, [name of
          state], and the Parties hereby consent to, and waive all defenses of
          lack of personal jurisdiction, and forum non conveniens with respect
          to venue and jurisdiction in such state and federal courts.
          <br />
          Application of the United Nations Convention on Contracts for the
          International Sale of Goods and the the Uniform Computer Information
          Transaction Act (UCITA) are excluded from these Terms and Conditions.
          <br />
          In no event shall any Dispute brought by either Party related in any
          way to the Site be commenced more than _____ years after the cause of
          action arose. If this provision is found to be illegal or
          unenforceable, then neither Party will elect to arbitrate any Dispute
          falling within that portion of this provision found to be illegal or
          unenforceable and such Dispute shall be decided by a court of
          competent jurisdiction within the courts listed for jurisdiction
          above, and the Parties agree to submit to the personal jurisdiction of
          that court.
          <br />
          <br />
          <strong>Option 3: Binding Arbitration</strong>
          To expedite resolution and control the cost of any dispute,
          controversy or claim related to these Terms and Conditions (each a
          "Dispute" and collectively, “Disputes”), any Dispute brought by either
          you or us (individually, a “Party” and collectively, the “Parties”)
          shall be finally and exclusively resolved by binding arbitration.
          <br />
          YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT
          TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be
          commenced and conducted under the Commercial Arbitration Rules of the
          American Arbitration Association ("AAA") and, where appropriate, the
          AAA’s Supplementary Procedures for Consumer Related Disputes ("AAA
          Consumer Rules"), both of which are available at the AAA website
          www.adr.org.
          <br />
          Your arbitration fees and your share of arbitrator compensation shall
          be governed by the AAA Consumer Rules and, where appropriate, limited
          by the AAA Consumer Rules. [If such costs are determined to by the
          arbitrator to be excessive, we will pay all arbitration fees and
          expenses.]
          <br />
          The arbitration may be conducted in person, through the submission of
          documents, by phone, or online. The arbitrator will make a decision in
          writing, but need not provide a statement of reasons unless requested
          by either Party. The arbitrator must follow applicable law, and any
          award may be challenged if the arbitrator fails to do so.
          <br />
          Except where otherwise required by the applicable AAA rules or
          applicable law, the arbitration will take place in [name of county]
          County, [name of state]. Except as otherwise provided herein, the
          Parties may litigate in court to compel arbitration, stay proceedings
          pending arbitration, or to confirm, modify, vacate, or enter judgment
          on the award entered by the arbitrator.
          <br />
          If for any reason, a Dispute proceeds in court rather than
          arbitration, the Dispute shall be commenced or prosecuted in the state
          and federal courts located in [name of county] County, [name of
          state], and the Parties hereby consent to, and waive all defenses of
          lack of, personal jurisdiction, and forum non conveniens with respect
          to venue and jurisdiction in such state and federal courts.
          <br />
          Application of the United Nations Convention on Contracts for the
          International Sale of Goods and the Uniform Computer Information
          Transaction Act (UCITA) are excluded from these Terms and Conditions.
          In no event shall any Dispute brought by either Party related in any
          way to the Site or Services be commenced more than ______ years after
          the cause of action arose.
          <br />
          If this provision is found to be illegal or unenforceable, then
          neither Party will elect to arbitrate any Dispute falling within that
          portion of this provision found to be illegal or unenforceable and
          such Dispute shall be decided by a court of competent jurisdiction
          within the courts listed for jurisdiction above, and the Parties agree
          to submit to the personal jurisdiction of that court.
          <br />
          <strong>Option 2/Option 3: Restrictions</strong>
          The Parties agree that any arbitration shall be limited to the Dispute
          between the Parties individually. To the full extent permitted by law,
          (a) no arbitration shall be joined with any other proceeding; (b)
          there is no right or authority for any Dispute to be arbitrated on a
          class-action basis or to utilize class action procedures; and (c)
          there is no right or authority for any Dispute to be brought in a
          purported representative capacity on behalf of the general public or
          any other persons.
          <br />
          <strong>
            Option 2/Option 3: Exceptions to [Informal Negotiations and]
            Arbitration
          </strong>
          The Parties agree that the following Disputes are not subject to the
          above provisions concerning [informal negotiations and] binding
          arbitration: (a) any Disputes seeking to enforce or protect, or
          concerning the validity of, any of the intellectual property rights of
          a Party; (b) any Dispute related to, or arising from, allegations of
          theft, piracy, invasion of privacy, or unauthorized use; and (c) any
          claim for injunctive relief.
          <br />
          If this provision is found to be illegal or unenforceable, then
          neither Party will elect to arbitrate any Dispute falling within that
          portion of this provision found to be illegal or unenforceable and
          such Dispute shall be decided by a court of competent jurisdiction
          within the courts listed for jurisdiction above, and the Parties agree
          to submit to the personal jurisdiction of that court.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            CORRECTIONS
          </h4>
          <br />
          There may be information on the Site that contains typographical
          errors, inaccuracies, or omissions that may relate to the Site,
          including descriptions, pricing, availability, and various other
          information. We reserve the right to correct any errors, inaccuracies,
          or omissions and to change or update the information on the Site at
          any time, without prior notice.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            DISCLAIMER
          </h4>
          <br />
          THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
          THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK.
          TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
          EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY
          WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR
          RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
          CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY
          NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE,
          (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY
          AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
          THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM
          THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY
          BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6)
          ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS
          OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT
          POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO
          NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY
          PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
          SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION
          FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A
          PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
          BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
          <br />
          AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN
          ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
          CAUTION WHERE APPROPRIATE.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            LIMITATIONS OF LIABILITY
          </h4>
          <br />
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
          SUCH DAMAGES.
          <br />
          [NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
          LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM
          OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO [THE LESSER OF] [THE
          AMOUNT PAID, IF ANY, BY YOU TO US DURING THE [_________] MONTH PERIOD
          PRIOR TO ANY CAUSE OF ACTION ARISING [OR] [$_________]. CERTAIN STATE
          LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION
          OR LIMITATION OF CERTAIN DAMAGES.
          <br />
          IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR
          LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.]
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            INDEMNIFICATION
          </h4>
          <br />
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys’ fees and expenses,
          made by any third party due to or arising out of:
          <ul className="my-4 ml-6 list-disc">
            <li>Your Contributions </li>
            <li>Use of the Site </li>
            <li>Breach of these Terms and Conditions</li>
            <li>
              Any breach of your representations and warranties set forth in
              these Terms and Conditions;{" "}
            </li>
            <li>
              Your violation of the rights of a third party, including but not
              limited to intellectual property rights or{" "}
            </li>
            <li>
              Any overt harmful act toward any other user of the Site with whom
              you connected via the Site.
            </li>
          </ul>
          <br />
          Notwithstanding the foregoing, we reserve the right, at your expense,
          to assume the exclusive defense and control of any matter for which
          you are required to indemnify us, and you agree to cooperate, at your
          expense, with our defense of such claims. We will use reasonable
          efforts to notify you of any such claim, action, or proceeding which
          is subject to this indemnification upon becoming aware of it.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            USER DATA
          </h4>
          <br />
          We will maintain certain data that you transmit to the Site for the
          purpose of managing the Site, as well as data relating to your use of
          the Site. Although we perform regular routine backups of data, you are
          solely responsible for all data that you transmit or that relates to
          any activity you have undertaken using the Site.
          <br />
          You agree that we shall have no liability to you for any loss or
          corruption of any such data, and you hereby waive any right of action
          against us arising from any such loss or corruption of such data.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </h4>
          <br />
          Visiting the Site, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications we provide to you
          electronically, via email and on the Site, satisfy any legal
          requirement that such communication be in writing.
          <br />
          YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
          ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
          POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR
          VIA THE SITE.
          <br />
          You hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by
          any means other than electronic means.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            CALIFORNIA USERS AND RESIDENTS
          </h4>
          <br />
          If any complaint with us is not satisfactorily resolved, you can
          contact the Complaint Assistance Unit of the Division of Consumer
          Services of the California Department of Consumer Affairs in writing
          at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834
          or by telephone at (800) 952-5210 or (916) 445-1254.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            MISCELLANEOUS
          </h4>
          <br />
          These Terms and Conditions and any policies or operating rules posted
          by us on the Site constitute the entire agreement and understanding
          between you and us. Our failure to exercise or enforce any right or
          provision of these Terms and Conditions shall not operate as a waiver
          of such right or provision.
          <br />
          These Terms and Conditions operate to the fullest extent permissible
          by law. We may assign any or all of our rights and obligations to
          others at any time. We shall not be responsible or liable for any
          loss, damage, delay, or failure to act caused by any cause beyond our
          reasonable control.
          <br />
          If any provision or part of a provision of these Terms and Conditions
          is determined to be unlawful, void, or unenforceable, that provision
          or part of the provision is deemed severable from these Terms and
          Conditions and does not affect the validity and enforceability of any
          remaining provisions.
          <br />
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Terms and
          Conditions or use of the Site. You agree that these Terms and
          Conditions will not be construed against us by virtue of having
          drafted them.
          <br />
          You hereby waive any and all defenses you may have based on the
          electronic form of these Terms and Conditions and the lack of signing
          by the parties hereto to execute these Terms and Conditions.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            CONTACT US{" "}
          </h4>
          <br />
          In order to resolve a complaint regarding the Site or to receive
          further information regarding use of the Site, please contact us at:
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li className=" mb-4 text-gray-500">
              <span className=" inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill h-4 w-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </span>
              <span className=" ml-3"> University Of Isfahan, Iran</span>
            </li>
            <li className="mb-4 text-gray-500">
              <span className=" inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </span>
              <span className="ml-3">09134821558</span>
            </li>
            <li className="mb-4 text-gray-500">
              <a href="mailto:2001erfan1380@gmail.com">
                <span className=" inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-envelope h-4 w-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                  </svg>
                </span>
                <span className=" ml-3">2001erfan1380@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
