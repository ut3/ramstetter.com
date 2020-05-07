/* SPDX-License-Identifier: GPL-2.0-only
 *
 * Copyright 2020 J Rick Ramstetter, rick.ramstetter@gmail.com
 *
 * This file is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * This project incorporates work covered by the following copyright and
 * permission notices
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2015 gatsbyjs
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

import React from 'react'
import Link from 'gatsby-link'

import Layout from 'components/layout'
import Meta from 'components/meta'

class Privacy extends React.Component {
  render() {
    const { location } = this.props

    return (
      <Layout location={location}>
        <Meta title="Privacy" location={location} />
        <div className="container-fluid">
          <h1>Privacy Policy</h1>
          <p>
            This privacy policy (the “
            <span class="font-weight-bold">Privacy Policy</span>”) describes how
            Anteater LLC (a Washington state, USA, limited liability company,
            henceforth "<span class="font-weight-bold">Anteater</span>")
            collects, uses, and discloses information, including Personal
            Information.
          </p>
          <p>
            Anteater provides and manages content on these and other domains
            (each a "<span class="font-weight-bold">Site</span>", collectively "
            <span class="font-weight-bold">Sites</span>"):{' '}
            <a href="//ramstetter.com">ramstetter.com</a>,{' '}
            <a href="//ramstetter.org">ramstetter.org</a>,{' '}
            <a href="//anteaterllc.com">anteaterllc.com</a>, and{' '}
            <a href="//amperdash.com">amperdash.com</a>.
          </p>
          <p>
            This Privacy Policy informs you of Anteater's policies regarding the
            collection, use, and disclosure of information, including Personal
            Information.{' '}
            <span class="font-weight-bold text-uppercase">
              By (1) accessing the Sites, or (2) engaging in communication with
              Anteater, its employees, agents, or subsidiaries, or the
              employees, agents, and subsidiaries thereof via any medium
              ("Communications"), or (3) retaining or otherwise contracting with
              Anteater or its subsidiaries for business services ("Services"),
              you are accepting and consenting to this Privacy Policy.
            </span>{' '}
            Please read this Privacy Policy carefully.
          </p>
          <hr class="border-primary" Style="width: 80vw; text-align: center;" />
          <h2>1. Inapplicable to Third Parties</h2>
          <p>
            The Sites may contain links to third-party sites which are not
            governed by this Privacy Policy. If you visit such third-party
            sites, please review their privacy policies. Anteater is not
            responsible for the privacy practices of any third party.
          </p>
          <hr class="border-primary" Style="width: 80vw; text-align: center;" />
          <h2>2. Changes</h2>
          <p>
            Changes to this Privacy Policy will take effect immediately upon
            posting. It is your responsibility to refer back to this Privacy
            Policy to review changes. After any update to this Privacy Policy,
            continued access of the Sites, further Communications, or
            continuation of Services{' '}
            <span class="font-italic">
              will constitute your acceptance of and agreement to this revised
              Privacy Policy.
            </span>
          </p>
          <hr class="border-primary" Style="width: 80vw; text-align: center;" />
          <h2>3. Types of Collected Information</h2>
          <p>
            This section explains the types of information Anteater collects
            from you: Personal Information, Log Data, and Cookies (collectively,
            "<span class="font-weight-bold">Collected Information</span>").{' '}
          </p>
          <h3>3.1. Personal Information</h3>
          <p>
            “<span class="font-weight-bold">Personal Information</span>” is any
            information that can be used to distinguish, identify, or contact a
            specific individual.
          </p>
          <p>
            Anteater may keep your name, address, birth date, email address and
            phone number, and any other information that may identify you or
            would allow someone to contact you.
          </p>
          <p>
            Anteater may keep copies of all Communications with you,, including
            emails, text messages, and instant messages.
          </p>
          <p>
            Anteater may keep copies of notes, samples, sources, products, and
            other artifacts produced, transmitted, or otherwise made available
            as part of a business relationship with you, subject to bounds
            established in prior written agreement.
          </p>
          <p>
            Anteater may keep copies of your legal information, including
            billing and bank account information, credit card numbers, social
            security (SSN) or social insurance number, employer identification
            number (EIN), taxpayer identification number (TIN), state
            identification numbers including Washington State Uniform Business
            Identifier (UBI) numbers and drivers license numbers, photo
            identification, business licenses, and tax forms.
          </p>
          <p>
            Anteater may keep photographs, audio recordings, and video
            recordings of you procured during the normal course of Services,
            such as during teleconferences and virtual meetings. Anteater will{' '}
            <span class="font-italic">never</span> keep photographs, audio
            recordings, or video recordings of persons not currently or formerly
            directly engaged in a Services relationship with Anteater.
          </p>
          <h3>3.2. Log Data</h3>
          <p>
            Anteater may collect information that your browser sends whenever
            you visit a Site ("<span class="font-weight-bold">Log Data</span>").
            This may include browser name, the type of computer, your IP
            address, referring web site, or other web page parameters.
          </p>
          <p>
            Anteater uses Google Analytics to monitor traffic patterns and usage
            of the Sites, and to deliver aggregated statistics and related
            information about the Sites. To facilitate those services, Google
            may collect your Log Data. For more information, please see{' '}
            <a href="//policies.google.com/privacy">Google’s Privacy Policy</a>.
          </p>
          <p>
            Anteater uses Cloudflare to protect the Sites from attacks, provide
            load balancing, and provide caching. To facilitate those services,
            Cloudflare may collect your Log Data. For more information, please
            see{' '}
            <a href="//www.cloudflare.com/privacypolicy/">
              Cloudflare's Privacy Policy
            </a>
            .
          </p>
          <p>
            Anteater uses Netlify to host the Sites. To facilitate that service,
            Netlify may collect your Log Data. For more information, please see{' '}
            <a href="//www.netlify.com/privacy/">Netlify's Privacy Policy</a>.
          </p>
          <p>
            Anteater may set cookies on your device to collect additional
            information. See section "Cookies" for details.
          </p>
          <h3>3.3. Cookies</h3>
          <p>
            Cookies are small files of software which save and retrieve
            information about your visit to a website. Aside from cookies placed
            by the third party service providers described in this Privacy
            Policy,{' '}
            <span class="font-italic">
              Anteater does not make use of cookies on the Sites
            </span>
            .
          </p>
          <p>
            In facilitating those services described in section 4.2. Log Data,
            Google Analytics may set cookies (including those named _gat, _gid_,
            IDE, and _ga) on your device. For more information, please see{' '}
            <a href="//policies.google.com/privacy">Google’s Privacy Policy</a>{' '}
            in addition to this{' '}
            <a href="//developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
              Google support article
            </a>
            .{' '}
          </p>
          <p>
            In facilitating those services described in section 4.2. Log Data,
            Cloudflare may set cookies (including those named _cflb, _cf_bm, and
            _cfduid) on your device. For more information, please see{' '}
            <a href="//www.cloudflare.com/privacypolicy/">
              Cloudflare's Privacy Policy
            </a>{' '}
            in addition to this{' '}
            <a href="https://support.cloudflare.com/hc/en-us/articles/200170156-Understanding-the-Cloudflare-Cookies#12345682">
              Cloudflare support article
            </a>
            .
          </p>
          <hr class="border-primary" Style="width: 80vw; text-align: center;" />
          <h2>4. Use of Collected Information</h2>
          <p>
            Anteater may use Log Data and Cookies to present the Sites to you,
            to allow you to participate in interactive features on the Sites, to
            enhance the experience of using the Sites, to manage access to the
            Sites, and to gather statistics about the use of the Sites,
            including via Google Analytics. Anteater will{' '}
            <span class="font-italic">never</span> use Personal Information for
            these purposes.
          </p>
          <p>
            Anteater may use Collected Information to carry out its obligations
            and enforce its rights that arise from any contracts entered into
            between you and it, including for billing, banking, and collections.
          </p>
          <p>
            Anteater may use Collected Information to comply with legal or
            regulatory obligations, including tax filings.
          </p>
          <p>
            Anteater may use Collected Information to provide you with
            information on its services and invite you to attend its events.
          </p>
          <p>
            Anteater may use Collected Information to publish feedback and
            comments in a portfolio, including on this website, subject to
            bounds established in prior written agreement.
          </p>
          <p>
            With your explicit consent, Anteater may use Collected Information
            for any other purpose not enumerated in this Privacy Policy.
          </p>
          <hr class="border-primary" Style="width: 80vw; text-align: center;" />
          <h2>5. Sharing of Collected Information</h2>
          <p>
            Anteater may share your Collected Information to comply with any
            court order, law, legal process (such as a subpoena), or law
            enforcement requirement.
          </p>
          <p>
            Anteater may share your Collected Information when responding to any
            governmental, regulatory body, or public authority request.
          </p>
          <p>
            In the event that Anteater, some portion thereof, or the
            subsidiaries thereof are sold, Anteater may share your Collected
            Information with a buyer or other successor.
          </p>
          <p>
            Anteater may share your Collected Information to carry out
            obligations or enforce its rights, including for billings, banking,
            collections, and legal pursuits.
          </p>
          <p>
            Anteater may share your Collected Information to protect its rights,
            property, or safety. This includes exchanging information for the
            purposes of fraud protection and credit risk reduction.
          </p>
          <p>
            Anteater relies on the positive feedback of its clients for success.
            Anteater may share your Collected Information with prospective
            clients to enable them to use you as a reference with regard to
            Anteater's performance while rendering Services. You may opt-out of
            serving as a reference at any time.
          </p>
          <p>
            With your explicit consent, Anteater may share your Collected
            Information for any other purpose not enumerated in this Privacy
            Policy.
          </p>
          <hr class="border-primary" Style="width: 80vw; text-align: center;" />
          <h2>6. Duration of Storage</h2>
          <p>
            Anteater will keep your collected Log Data, Cookies, and information
            derived from cookies only so long as is required to present the
            Sites to you, to allow you to participate in interactive features on
            the Sites, to enhance the experience of using the Sites, to manage
            access to the Sites, and to gather statistics about the use of the
            Sites.
          </p>
          <p>
            Anteater will keep your Personal Information indefinitely unless you
            explicitly request that such information be deleted. Anteater will
            honor such a request unless there are reasons for further storage
            that prevail over your interests, such as enforcing Anteater's
            rights, defending against legal claims, billing, and collections.
            Such requests may be sent using the{' '}
            <Link to="/contact">contact information found on this Site.</Link>
          </p>
          <hr class="border-primary" Style="width: 80vw; text-align: center;" />
          <h2>7. Location of Storage</h2>
          <p>
            Anteater uses servers located on its premises in Washington state,
            USA, as well as cloud services hosted by third-party service
            providers with servers located in the USA. In addition to those
            third party service providers described previously, Anteater uses
            Zoho.com for email services, HelloFax.com for fax services, and a
            variety of software for telecommunications. Accordingly, your
            Collected Information may be available to government and/or law
            enforcement agencies in the USA, which may access it pursuant to a
            lawful order, irrespective of the safeguards Anteater has
            implemented to protect your Collected Information.
          </p>
          <hr class="border-primary" Style="width: 80vw; text-align: center;" />
          <h2>8. Protection of Collected Information</h2>
          <p>
            To protect your Personal Information against loss, theft, misuse,
            unauthorized access, unauthorized disclosure, copying, or
            alteration, Anteater makes use of various safeguards. This sentence
            as demarked by the period (alternatively full stop or dot)
            characters surrounding it has no bearing on this Privacy Policy, and
            with it Anteater intends to convey that you're an astute reader, and
            further that you should <Link to="/contact">send an email</Link>{' '}
            subject line "I'm an astute Privacy Policy reader" to strike up a
            friendly conversation. The safeguards employed by Anteater to
            protect your Personal Information include: security of its premises,
            contractual obligations to bind third-party service providers,
            security software and firewalls, internal document retention and
            disposal practices, and passwords that restrict access to its
            electronic files.
          </p>
          <p>
            The security of communications sent by electronic means or by post
            cannot be guaranteed. Each individual that provides information to
            Anteater via the internet or by post does so at their own risk.
            Anteater cannot accept responsibility for misuse or loss of, or
            unauthorized access to, data where the security of information is
            not within its control.
          </p>
          <hr class="border-primary" Style="width: 80vw; text-align: center;" />
          <h2>9. Residents of the European Economic Area ("EEA")</h2>
          <p>
            Anteater does not specifically offer services to residents in the
            European Economic Area ("EEA"). If the European Union’s General Data
            Protection Regulation (GDPR) is deemed to apply to Anteater or its
            practices or Services, the following terms shall apply.
          </p>
          <p>
            Transfers of any personal data (as that term is defined under the
            GDPR) of residents of the EEA are made in accordance with permitted
            legal measures under applicable laws. Whenever Anteater transfers
            personal data out of the EEA, it ensures a similar degree of
            protection by at least one of the following safeguards:
            <ul>
              <li>
                The country to which the personal data is being sent has been
                deemed to provide an adequate level of protection for personal
                data by the European Commission.
              </li>
              <li>
                {' '}
                Where Anteater uses providers based in the USA, Anteater may
                transfer personal data to them if they are part of the Privacy
                Shield which requires them to provide similar protection to
                personal data shared between the EEA and the U.S.
              </li>
            </ul>
          </p>
          <p>
            The legal grounds under which Anteater processes personal data of
            EEA residents are:
            <ul>
              <li>with consent</li>
              <li>
                to perform the services you have requested from Anteater or,
                upon your request, to take the steps necessary to provide you
                with such services
              </li>
              <li>
                in the furtherance of its legitimate interests in maintaining
                business relationships and communicating with you as a business
                contact, about its activities and services
              </li>
            </ul>
          </p>
          <p>
            Individuals located in the EEA have certain rights under European
            law (including under the GDPR) with respect to personal data,
            including the right to request access to, obtain, correct, amend,
            delete, or limit the use of your personal data. Individuals who are
            located in to the EEA and who wish to exercise these rights, should
            contact Anteater using the{' '}
            <Link to="/contact">contact information found on this Site</Link>.
            If the inquiry relates to personal data collected by a third party,
            you should instead contact that third party. Individuals located in
            the EEA also have the right to make complaints to regulatory
            authorities in respect of Anteater's privacy practices.
          </p>
          <hr class="border-primary" Style="width: 80vw; text-align: center;" />
          <h2>10. Residents of California, USA</h2>
          <p>
            The California Consumer Privacy Act ("CCPA") may give you the right
            to opt out of the sale of your Personal Information to third
            parties. Anteater does not sell your Personal Information to third
            parties.
          </p>
          <p>
            The CCPA may give you the right to request access to Personal
            Information collected about you over the past 12 months, in addition
            to information regarding the source of that information, the
            purposes for which it was collected, and the third parties and
            service providers with whom it has been shared. Such a request can
            be made via the{' '}
            <Link to="/contact">contact information found on this Site</Link>.
            Your identity must be verified prior to disclosure of any
            information under the CCPA.
          </p>
          <p>
            The CCPA may give you the right to request that Anteater delete
            Personal Information collected directly from you. Such requests can
            be sent using the{' '}
            <Link to="/contact">contact information found on this Site</Link>
          </p>
          <p>
            The CCPA may give you the right to be free from discrimination based
            on your exercise of your CCPA rights. Anteater does not discriminate
            against anyone who chooses to exercise their CCPA rights.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Privacy
