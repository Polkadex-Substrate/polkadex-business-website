import { Footer, Newsletter, Return } from 'components';
import Head from 'next/head';
import React from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export default function Terms() {
  const { footer, newsletter }: IHomeTranslations = HomeTranslations['en-US'];

  return (
    <S.Wrapper>
      <Head>
        <title>Polkadex - Terms and conditions</title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config','${process.env.GOOGLE_ANALYTICS}');
          `,
          }}
        />
      </Head>
      <Return />
      <main>
        <S.Content>
          <h1>TERMS AND CONDITIONS (“TERMS”)</h1>
          <p>
            Please read these Terms carefully. In these Terms, “We”, “us” or the
            “Company” refers to Polkadex Inc., a British Virgin Islands (“BVI”)
            registered Company, situated at Craigmuir Chambers, Road Town,
            Tortola, VG 1110, British Virgin Islands and “our” shall be
            construed accordingly. “You” refers to any person accessing the
            Website and willing to participate in the Polkadex Crowd Loan
            Campaign, and “Your” shall be construed accordingly. The following
            terms and conditions (“Terms”) govern Your usage of
            https://www.polkadex.trade/ (“Website”) while clicking the
            &quot;contribute&quot; button or while accessing the Website with
            respect to the Polkadex Crowd Loan Campaign. By accessing the
            Website for participating in this Polkadex Crowd Loan Campaign, You
            agree and accept to be legally bound by these Terms provided by us.
          </p>
          <p>
            These Terms also include other operating rules, policies, and
            procedures which We may update from time to time, however no other
            information mentioned on the Website, other websites or marketing or
            promotional channels shall form a part of these Terms. By reading
            and acknowledging these Terms and any revised Terms which may be
            uploaded by the Company from time to time without any prior notice,
            You agree to abide by all these Terms mentioned hereunder and agree
            that You are aware of all the market risks associated with such
            Contributions towards this campaign. These Terms have never been
            examined or approved by any regulatory authorities of any
            jurisdiction. These Terms do not imply that any laws have been
            complied with.
          </p>
          <p>
            These Terms may be periodically updated and shall be subject to
            change in future and become effective as soon as the same are posted
            on the Website. The purpose of this Terms between you and the
            Company is to lay down the terms and conditions agreeable to you for
            accessing the Website for participating in the Polkadex Crowd Loan
            Campaign. The information provided on the Website shall be treated
            on an “as is” basis.
          </p>
          <p>
            You and the Company shall be collectively referred to as “Parties”
            and individually as “Party” in these Terms.
          </p>
          <p>IT IS AGREED BY BOTH PARTIES THAT:</p>
          <p>1. DEFINITIONS:</p>
          <p>
            1.1. Anti-Money Laundering Laws shall mean the laws, regulations,
            and procedures intended to prevent criminals from disguising
            illegally obtained funds as legitimate income.:
          </p>
          <p>
            1.2. Applicable Laws shall mean all relevant or applicable statutes,
            laws (including any reporting and/or withholding tax requirements of
            any government), rules, regulations, directives, circulars, notices,
            guidelines and practice notes of any nation or government, any state
            or other political subdivision thereof, any entity exercising
            legislative, executive, judicial or administrative functions of or
            pertaining to government, including, without limitation, any
            government authority, agency, department, board, commission or
            instrumentality, and any court, tribunal or arbitrator(s) of
            competent jurisdiction, and any self-regulatory organization,
            private bodies exercising quasi-governmental, regulatory or
            judicial-like functions to the extent they relate to You, the
            Company, the Project, the Network Parachain Auction, the 1 Polkadex
            Crowd Loan Campaign and/or the Reward Programme.
          </p>
          <p>
            1.3. Applicable Taxes shall mean the taxes applicable to the
            Contributor and payable by the Contributor to the appropriate
            taxation authorities by virtue of You being a citizen, or having
            domicile or being resident of any territory or country.
          </p>
          <p>
            1.4. Auction Bid means the bid placed in support of the Polkadex
            Crowd Loan Campaign through the Digital Wallet in the Network
            Controlled Token Account for securing a Parachain Slot on the
            Network.
          </p>
          <p>
            1.5. BVIFSC means British Virgin Islands Financial Services
            Commission.
          </p>
          <p>
            1.6. Campaign Duration means the period commencing from the date of
            the Polkadex Crowd Loan Campaign and ending on the date falling six
            (6) weeks after such commencement date as specified by the Company
            in the Network’s substrate “crowd loan module” or such other
            deadline parameter which the Company may, in its sole discretion,
            specify.
          </p>
          <p>
            1.7. Candle Auction means an online variant of open auction more
            fully described at https://wiki.polkadot.network/docs/learn-auction.
          </p>
          <p>
            1.8. Close Associate means a person who is widely and publicly known
            to maintain an unusually close relationship with such Senior Foreign
            Political Figure and includes a person who is in a position to
            conduct substantial domestic and international financial
            transactions on behalf of such Senior Foreign Political Figure.
          </p>
          <p>
            1.9. Contribution means such number of Tokens which a Contributor is
            contributing in connection with the Polkadex Crowd Loan Campaign to
            support the Company’s Auction Bid(s).
          </p>
          <p>
            1.10. Contributor means the person with a Digital Wallet who is
            eligible to contribute towards the Polkadex Crowd Loan Campaign.
          </p>
          <p>
            1.11. Digital Wallet means any such digital asset wallet on a
            blockchain address that is compatible with the Tokens and the PDEX
            Tokens.
          </p>
          <p>
            1.12. Excluded Jurisdictions means the jurisdictions as mentioned in
            Annexure A to these Terms.
          </p>
          <p>
            1.13. Foreign Bank means a non-United States of America banking
            institution.
          </p>
          <p>
            1.14. Immediate Family includes the parents, siblings, spouse,
            children and in-laws of a Senior Foreign Political Figure
          </p>
          <p>
            1.16. Network means the heterogeneous multichain network with shared
            security and interoperability known as “Polkadot”, which is in
            detail described at
            https://wiki.polkadot.network/docs/getting-started.
          </p>
          <p>
            1.17. Network Parachain Auction means the online candle auction
            hosted and managed on the Network for the purposes of leasing out
            Parachain Slots to participating projects.
          </p>
          <p>
            1.18. OFAC means the United States Office of Foreign Assets Control
            of the United States Department of the Treasury.
          </p>
          <p>
            1.19. Parachain means an application-specific data structure, such
            as a blockchain, that is deployed on the Network.
          </p>
          <p>
            1.20. PDEX Tokens means the cryptographic tokens associated with the
            Project known as “PDEX Tokens”.
          </p>
          <p>
            1.21. Polkadex Crowd Loan Campaign means the campaign launched by
            the Company to secure a Parachain Slot on the Network through the
            Contributions of the Contributors.
          </p>
          <p>
            1.22. Project means the “Polkadex” project, which is a fully
            decentralized, interoperable, trustless, peer-to-peer
            orderbook-based exchange built for cryptocurrency trading.
          </p>
          <p>
            1.23. Sanction means a punitive or coercive measure or action
            administered by the OFAC or any other United States government
            authority, or any similar sanctions or measures imposed or
            administered by the United Nations Security Council, the European
            Union, Her Majesty’s Treasury of the United Kingdom, or similar
            sanctions administered or imposed by the government of the British
            Virgin Islands or the respective country of which the Contributor is
            a citizen or resides in.
          </p>
          <p>
            1.24. Sanctioned Country means any jurisdiction(s)/country(ies) to
            which any Sanction applies.
          </p>
          <p>
            1.25. Senior Foreign Political Figure means a senior official in the
            executive, legislative, administrative, military, or judicial branch
            of a government (whether elected or not), a senior official of a
            major political party, or a senior executive of a foreign
            government-owned corporation. It includes any corporation, business
            or other entity that has been formed by, or for the benefit of, a
            senior foreign political figure.
          </p>
          <p>
            1.26. Tokens means cryptographic tokens associated with the Network,
            also known as “DOT”.
          </p>
          <p>
            1.27. Website means the website of the Company which is accessible
            at https://www.polkadex.trade/.
          </p>
          <p>2. INTERPRETATION:</p>
          <p>2.1 In these Terms, unless provided otherwise, a reference to:</p>
          <p>
            2.1.1. the Company shall include its duly authorised agents and/or
            delegates;
          </p>
          <p>
            2.1.2. a person includes a reference to any individual, body
            corporate, unincorporated association or partnership;
          </p>
          <p>
            2.1.3. the masculine gender includes the feminine and neuter genders
            and vice versa;
          </p>
          <p>2.1.4. the singular includes the plural and vice versa;</p>
          <p>
            2.1.5. any law or regulation is a reference to that law or
            regulation as amended from time to time and, where the same has been
            repealed, to any re-enactment or replacement of the same; and
          </p>
          <p>
            2.1.6. any phrase introduced by the terms “including”, “include”,
            “in particular”, for example or any other similar expression shall
            be construed as illustrative and shall not limit the sense of the
            words, description, definition, phrase or term preceding those
            terms.
          </p>
          <p>
            2.1.7. The annexures shall have effect and be construed as an
            integral part of these Terms, and 3 references to “these Terms”
            shall include annexures.
          </p>
          <p>
            2.1.8. The headings in these Terms are included for convenience only
            and shall not be taken into account in construing these Terms.
          </p>
          <p>
            2.1.9. References to “paragraphs” are to be construed as references
            to the paragraphs of these Terms.
          </p>
          <p>3. NETWORK PARACHAIN SLOT AUCTION</p>
          <p>
            3.1. Polkadex intends to implement a Parachain on the Network using
            the services or resources of the Network. The Network will support a
            limited number of Parachains by releasing a fixed number of
            Parachain slots (“Parachain Slots”), each of which shall have a
            leasing duration of two (2) years (“Slot Lease Duration”). In case
            of a successful auction, the Project will be onboarded on the
            Network and the Contributor will be able to use the Network
            blockchain during the Slot Lease Duration. These Parachain Slots are
            competitive in nature, which means many projects including our
            Project may need to lock a large number of Tokens to secure the slot
            lease when they’re auctioned off during the Campaign Duration.
          </p>
          <p>
            3.2. The intention of the Company solely is to participate in the
            Network Parachain Auction to secure a Parachain Slot through Auction
            Bid(s) by submitting the maximum amount of the bids and let the
            Contributor contribute Tokens or DOT in support of the Company’s
            Auction Bid(s).
          </p>
          <p>
            3.3. The Parachain Slots are secured and won by the Project through
            a Candle Auction. Once the Contributor has contributed a minimum bid
            of the Tokens during the Campaign Duration, in the Network
            Controlled Token Account, from the Contributor’s Digital Wallet, the
            Tokens will get locked in the Network and the Contributor will not
            be able to withdraw the Contribution till the Auction ends. In case
            the Company determines that it has received sufficient Contribution
            for the Auction Bid, it can at its sole discretion cease the
            acceptance of any further Contributions.
          </p>
          <p>
            3.4. In case of a successful Auction Bid by the Company, the Tokens
            or DOT contributed by the Contributor will be locked in the Network
            for the Slot Lease Duration. Only at the end of the Slot Lease
            Duration, and when the Network automatically releases the
            contributed Tokens, will the Contributor be able to withdraw the
            Tokens contributed. The Contributor will be able to withdraw the
            Contribution made with respect to the Auction Bid, within such
            period of time as may be specified by the Network, by initiating a
            transaction using the same unique private key associated with the
            Digital Wallet from which the Contribution was made.
          </p>
          <p>
            3.5. In case the Auction Bid by the Company is unsuccessful, the
            Company will continue to participate in the next Network Parachain
            Auction by submitting further Auction Bid(s) until the expiry of the
            Campaign Duration. The Tokens (including all Supporters’
            Contributions) may be released in full automatically by the Network
            upon the expiry of the Campaign Duration and Contributors will be
            able to withdraw, within such period of time as may be specified by
            the Network, Contributor’s respective Contribution from the Network
            Controlled Token Account by initiating a transaction using the same
            unique private key associated with the Digital Wallet from which the
            Contribution was made.
          </p>
          <p>4. PARACHAIN REWARD PROGRAMME</p>
          <p>
            4.1. Post the successful completion of the Candle Auction, Polkadex
            will provide the Contributor 4 with reward tokens known as “PDEX
            Tokens” for each Token or DOT contributed towards the Project
            through the Auction Bid (“Reward Programme”). For each Token or DOT
            contributed towards the auction, the Contributor will receive 2 PDEX
            Token from the Company as the base reward or any other such amount
            as may be decided by the Company.
          </p>
          <p>
            4.2. As part of the Parachain Reward Programme launched by the
            Company, various rewards related information, for the Contributors
            eligible to receive them shall be published on the Website or
            Company’s related social media networks.
          </p>
          <p>
            4.3. A Contributor shall receive the reward pursuant to the Reward
            Programme in the same Digital Wallet, which has been used by the
            Contributor to make the Contribution towards the Polkadex Crowd Loan
            Campaign. The Contributor shall be eligible to use the PDEX Tokens
            for the governance of the Project or for future projects of the
            Company or as the Company may direct the Contributor from time to
            time.
          </p>
          <p>
            4.4. The exact amount of PDEX Tokens to be rewarded to the
            Contributors may be decided keeping in mind various factors but not
            limited to eligibility, Contribution or the recognition of such
            Contribution. The factors for determining the distribution of the
            rewards to the Contributors may be decided by the Company in its
            sole discretion and may be amended and modified over the Website
            from time to time. The Company may decide to change the base reward
            and/or prescribe separate reward amounts for different Contributors
            as well.
          </p>
          <p>
            4.5. Any Contributor shall be eligible to receive the rewards if it:
          </p>
          <p>
            4.5.1. is not a Disqualified Person or is ultimately controlled by a
            Disqualified Person;
          </p>
          <p>
            4.5.2. has provided all the relevant information as sought by the
            Project for contributing to the Polkadex Crowd Loan Campaign;
          </p>
          <p>
            4.5.3. has a valid Digital Wallet eligible to receive the rewards.
          </p>
          <p>
            4.6. For the avoidance of doubt, the Company is under no obligation
            to distribute the rewards or PDEX Tokens to the Contributor and has
            full discretion to decide to distribute or not to distribute the
            rewards as per the Reward Programme or as published on the Website
            or Company’s related social media networks.
          </p>
          <p>5. DISQUALIFICATION</p>
          <p>
            5.1. You will be considered a disqualified person (“Disqualified
            Person”) and will not be eligible to participate in the Polkadex
            Crowd Loan Campaign in case,
          </p>
          <p>5.1.1. You are an individual who is:</p>
          <p>5.1.1.1. a citizen of a Sanctioned Country; or</p>
          <p>
            5.1.1.2. residing in, domiciled or physically present in any
            Excluded Jurisdiction; or
          </p>
          <p>
            5.1.1.3. a part of the Consolidated List published at
            https://www.un.org/securitycouncil/content/un-sc-consolidated-list
            by the United Nations Security Council of individuals or entities
            subject to measures imposed by the United Nations Security Council;
            or
          </p>
          <p>5.1.1.4. a part of the United Nations Lists (UN Lists); or</p>
          <p>
            5.1.1.5. prohibited or ineligible, either fully or partly, under any
            Applicable Laws from participating in any part of the transactions
            intended through these Terms or the Polkadex Crowd Loan Campaign;
            and/or
          </p>
          <p>
            5.1.1.6. a part of any transactions contemplated in these Terms or
            the Polkadex Crowd Loan Campaign, which is restricted, prohibited,
            or unauthorized in nature either fully or partly under the
            Applicable Laws, regulatory requirements or rules in any
            jurisdiction applicable to You.
          </p>
          <p>5.1.2. You are a body corporate which is:</p>
          <p>
            5.1.2.1 incorporated in, or operates out of, an Excluded
            Jurisdiction, or
          </p>
          <p>
            5.1.2.2 under the control of one or more individuals who is/are
            citizen(s) of a Sanctioned Country; or domiciled in, residents of,
            or physically present/located in, an Excluded Jurisdiction; or
          </p>
          <p>
            5.1.2.3 a part of the consolidated list published at
            https://www.un.org/securitycouncil/content/un-sc-consolidated-list
            by the United Nations Security Council of individuals or entities
            subject to measures imposed by the United Nations Security Council;
            or
          </p>
          <p>5.1.2.4 a part of the United Nations Lists (UN Lists); or</p>
          <p>
            5.1.2.5 prohibited or ineligible, either fully or partly, under any
            Applicable Laws from participating in any part of the transactions
            intended through these Terms or the Polkadex Crowd Loan Campaign; or
          </p>
          <p>
            5.1.2.6 a part of any transactions contemplated in these Terms or
            the Polkadex Crowd Loan Campaign, which is restricted, prohibited,
            or unauthorized in nature either fully or partly under the
            Applicable Laws, regulatory requirements or rules in any
            jurisdiction applicable to You.
          </p>
          <p>
            5.2 You shall also not be eligible to participate in the Auction Bid
            if you are partly or fully controlled by another Disqualified
            Person.
          </p>
          <p>6 REPRESENTATIONS & WARRANTIES</p>
          <p>
            6.1 By accepting these Terms, you represent, warrant and declare to
            the Company and its affiliates that:
          </p>
          <p>
            6.1.1. Your participation in the Polkadex Crowd Loan Campaign is
            lawful for You to do so and Your acceptance of these Terms or any
            part thereof is not restricted or violative of any Applicable Law in
            Your jurisdiction. These Terms constitute a valid legal and binding
            obligation on You;
          </p>
          <p>
            6.1.2. In case of any restrictions or prohibitions imposed by the
            Applicable Law of Your jurisdiction, the same have been complied
            with by You without causing any liability towards the Company;
          </p>
          <p>
            6.1.3. In case if You are an individual, You are of the legal age
            and capacity to participate in the Polkadex Crowd Loan Campaign as
            per the jurisdiction to which you belong to, 6 reside, domiciled or
            are a citizen of, and are legally eligible to create binding
            obligations for Yourself in case of any liability which may incur
            due to the use of the Website or Your participation in the Polkadex
            Crowd Loan Campaign;
          </p>
          <p>
            6.1.4. In case, if You are a body corporate, You are duly
            incorporated and validly existing in Your jurisdiction as per the
            Applicable Laws and You are duly authorized to accept these Terms;
          </p>
          <p>
            6.1.5. You are not a Disqualified Person, acting on behalf of a
            Disqualified Person or ultimately controlled by a Disqualified
            Person;
          </p>
          <p>
            6.1.6. You have read the Terms carefully and understood these Terms
            and any annexure thereof;
          </p>
          <p>
            6.1.7. You will be bound by and abide with the latest version of
            these Terms;
          </p>
          <p>
            6.1.8. You shall not engage or participate in the Auction Bid if
            there are legal restrictions in Your country of residence or
            domicile;
          </p>
          <p>
            6.1.9. The Contributions made by You towards the Polkadex Crowd Loan
            Campaign is not done under any influence or coercion;
          </p>
          <p>
            6.1.10. You are not participating in the Reward programme with a
            view to use or obtain the PDEX Tokens for any illegal activity;
          </p>
          <p>
            6.1.11.
            YouaresolelyresponsibleforanytaximplicationsimposedbytheApplicableTaxLaws
            of Your jurisdiction and You shall not hold the Company liable for
            any tax liability arising therefrom;
          </p>
          <p>
            6.1.12. All and any documents provided by You to the Company for
            participating in the Polkadex Crowd Loan Auction are true, complete
            and accurate in all respects and there is no circumstance for the
            Company to believe that information provided by You to the Company
            is misleading or incomplete or that any relevant information has
            been omitted by You which is required to be shared with the Company;
          </p>
          <p>
            6.1.13. You acknowledge that the process of locking up of the Tokens
            or Dots contributed towards the Auction Bid in the Network
            Controlled Token Account does not allow or entitle the Company to
            use it for its personal purpose or generate any return for the
            Company;
          </p>
          <p>
            6.1.14. The Company or any of its affiliate does not have a control
            either over the Network Controlled Token Account or the Tokens or
            DOTs contributed towards Network Controlled Token Account and does
            not have a role in releasing the same from the Network Controlled
            Token Account as the same is solely controlled and managed by the
            Network;
          </p>
          <p>
            6.1.15. The Tokens shall not be considered, interpreted or construed
            as anything other than cryptocurrency, neither shall the Tokens be
            considered, interpreted or construed as a stock, share, debenture or
            security of any kind which is issued by any person or entity; any
            rights, options or derivatives in respect of such stocks, shares,
            debentures or security; unit of a collective business scheme, or a
            trust or derivatives thereof; any other form of security or
            investment, regulated or otherwise;
          </p>
          <p>
            6.1.16. No approval, consent or declaration is required on Your part
            in connection with the Applicable Laws or the applicable regulatory
            authority for Your participation in Polkadex Crowd Loan Campaign;
          </p>
          <p>
            6.1.17. You as an individual are not and in case You are a body
            corporate, neither You or Your employees, agents or any other person
            acting on behalf of You, are listed in the British Virgin Islands
            Financial Services Commission (BVIFSC) as an individual or entity
            under the Anti-Money Laundering Laws, criminal legislations,
            Counter-Terrorism Act of British Virgin Islands and/or such other
            law as prescribed by British Virgin Islands from time to time;
          </p>
          <p>
            6.1.18. You are not currently subjected to any Sanctions by OFAC or
            any other regulatory or governmental authority of United States. You
            are not on the “Specially Designated Person (SDN) or Blocked Person”
            list of OFAC or any similar regulatory or governmental authority;
          </p>
          <p>
            6.1.19. You are not subjected to any Sanctions administered by the
            United Nation’s Security Council or the European Union or Her
            Majesty’s Treasury of the United Kingdom or similar Sanctions
            administered or imposed by the government of the British Virgin
            Island or any the respective country of which You are a citizen of
            or reside in;
          </p>
          <p>
            6.1.20. You are not located, domiciled, resident of any country or
            territory that falls within the list of Excluded Jurisdictions as
            described in the Annexure A hereto;
          </p>
          <p>
            6.1.21. You are not dealing with any person, entity or government or
            are not engaged in any transactions with any person, entity or
            government on which any Sanctions have been imposed;
          </p>
          <p>
            6.1.22. In case, if You are a body corporate, no legal proceeding,
            action, suit or arbitration is pending against You in relation to
            Anti-Money Laundering Laws and Your operations at all times have
            been in compliance with the Anti-Money Laundering Laws of the
            British Virgin Island and in all other jurisdictions, where such
            body corporate conducts business or operations;
          </p>
          <p>
            6.1.23.
            Youareand/oranypersonorentitycontrolledbyYouorcontrollingYou,oranyperson
            having beneficial interest in You as a privately held entity, or any
            person for whom You are acting as an agent is not a Senior Foreign
            Political Figure, or any Immediate Family member or Close Associate
            of a Senior Foreign Political Figure in relation to Your
            participation in the Polkadex Crowd Loan Campaign;
          </p>
          <p>
            6.1.24.
            IfYouhaveanyaffiliationwithaForeignBankorreceivedepositsfromaForeignBank
            or handle any other financial transactions in relation to this
            Foreign Bank, the Foreign Bank should be authorized to conduct
            banking activities and should have a fixed address in such
            jurisdiction, it should maintain records of all its finance or
            banking related activities, the Foreign Bank is subjected to
            scrutiny and inspection by the licensing authority and the Foreign
            Bank shall not be providing banking services any other existing
            Foreign Bank which does not have a physical presence;
          </p>
          <p>
            6.1.25. The Digital Wallet provided by You is valid, secure and
            fully operational and is eligible to receive rewards, if the Company
            shall provide any. The Digital Wallet is fully controlled and
            managed by You and, You only have the full control of the unique
            private key of the Digital Wallet and other credentials of the
            Digital Wallet. For avoiding any 8 doubt, it should not be a
            blockchain address held, owned or controlled by any other person or
            a third party;
          </p>
          <p>
            6.1.26. All of the above representations and warranties made are
            true, complete and accurate in all respects and not misleading in
            nature post the acceptance and access of these Terms and the
            Polkadex Crowd Loan Campaign;
          </p>
          <p>
            6.2. The Company does not represent or warrant any information
            mentioned in these Terms or the Website or any social media network
            of the Company in relation to the Polkadex Crowd Loan Campaign, the
            Network, the Network Tokens, the Network Parachain Auction, the
            Reward Programme and/or the Project or anything related to it.
          </p>
          <p>
            6.3. In case of change of any information provided to the Company
            for participating in the Polkadex Crowd Loan Campaign, You shall
            promptly notify the Company of any such change within 30 days of
            such information change.
          </p>
          <p>7. DISCLAIMER</p>
          <p>
            7.1. To the extent permissible by the Applicable Laws, the Company
            disclaims the following in respect of its liability and shall not be
            held liable for:
          </p>
          <p>
            7.1.1. Any failure in disclosing any information regarding your
            participation in the Polkadex Crowd Loan Campaign, the Network, the
            Network Tokens, the Network Parachain Auction, the Reward Programme
            and/or the Project or anything related to it.
          </p>
          <p>
            7.1.2. Any delay or suspension of the Polkadex Crowd Loan Campaign,
            the Network Parachain Auction, the Reward Programme and/or the
            Project or anything related to it.
          </p>
          <p>
            7.1.3. Any sort of virus, bug, error or malfunction which has the
            capability to adversely affect the Polkadex Crowd Loan Campaign, the
            Network Parachain Auction, the Reward Programme and/or the Project
            or anything related to it.
          </p>
          <p>
            7.1.4. Any restrictions, prohibitions or regulation imposed by the
            Applicable Laws of any jurisdiction or the regulatory authority with
            respect to the Polkadex Crowd Loan Campaign, the Network Parachain
            Auction, the Reward Programme and/or the Project or anything related
            to it.
          </p>
          <p>
            7.1.5. Any risk or loss associated with the Polkadex Crowd Loan
            Campaign, the Network Parachain Auction, the Reward Programme, the
            Project, the Network Controlled Token Account and the Tokens, and/or
            the failure of any Contributor to withdraw the Contribution within
            the timeline prescribed by the Network.
          </p>
          <p>
            7.1.6. Any loss associated with the Digital Wallet or theft or
            destruction of the credentials including but not limited to the
            access to the unique private key.
          </p>
          <p>
            7.1.7. Any failure of the Contributor in keeping itself updated of
            any change in these Terms over the Website.
          </p>
          <p>
            7.1.8. All other incidental, direct or indirect and ancillary risks
            in relation to the Polkadex Crowd Loan Campaign, the Network
            Parachain Auction, the Reward Programme and/or the Project, whether
            expressly stated here or not.
          </p>
          <p>
            7.2. We are neither a registered financial advisor, securities
            broker, dealer, financial analyst or a financial planner. The
            information provided on the Website is based on our understanding of
            the Polkadex Crowd Loan Auction and for the purpose of information
            only. The information is provided on the Website regarding the
            participation in the campaign is general in nature and does not
            intend to share any financial advice in general or specific to You.
            You shall verify the information provided on the Website and are
            free to consult any qualified professional of Your choice to conduct
            diligence on Your end before making any Contribution.
          </p>
          <p>
            7.3. The Contribution made by the Contributor on the Network shall
            in no way be considered a “consideration” in exchange for receipt of
            rewards or the PDEX Tokens and, by making the Contribution, a
            Contributor does not become eligible to receive rewards, and the
            Company shall not be in anyway, contractually, or otherwise be bound
            to issue rewards to the Contributor.
          </p>
          <p>7.4. The Company reserves the right in its sole discretion to:</p>
          <p>
            7.4.1. Reject Your interest in participation or participation in the
            Polkadex Crowd Loan Campaign, without giving any specific reason and
            the Company or anyone associated with it shall not be held liable
            for incidental, direct or indirect and ancillary damage, loss or
            income or revenue accruing to You as a consequence of the rejection;
          </p>
          <p>
            7.4.2. Take measures including but not limited to geo-blocking of
            internet protocol address(es), to ensure that the Polkadex Crowd
            Loan Campaign, or the Reward Programme is not accessible to certain
            persons including Disqualified Persons in order to cease them from
            participating in the Polkadex Crowd Loan Campaign, or the Reward
            Programme, and the Company or anyone associated with it shall not be
            held liable for incidental, direct or indirect, or ancillary damage
            or loss of any kind whether in tort, contract or otherwise arising
            as a consequence of the such restriction;
          </p>
          <p>
            7.4.3. Suspend or delay the Polkadex Crowd Loan Campaign, the Reward
            Programme, and/or the Project, and Company or anyone associated with
            it shall not be held liable for incidental, direct or indirect, or
            ancillary damage or loss of any kind whether in tort, contract or
            otherwise arising as a consequence of such suspension or delay.
          </p>
          <p>8. INDEMNIFICATION</p>
          <p>
            You agree to defend, indemnify and hold harmless the Company (and
            each of our officers, directors, members, owners, employees, agents
            and affiliates) from any claim, demand, action, damage, loss, cost
            or expense, including without limitation attorneys’ fees, directly
            or indirectly arising out of (a) Your participation in the Polkadex
            Crowd Loan Campaign; (b) Your breach of these Terms; (c) Your
            violation of any rights of any other person or entity or any claims
            or demands made by any party, including any regulatory authority due
            to your participation in the Polkadex Crowd Loan Campaign or use of
            Website or other social media networks; or (d) Your violation of the
            Applicable Laws. If You are obligated to indemnify us, we will have
            the right, in our sole discretion, to control any action or
            proceeding (at our expense) and determine whether we wish to settle
            it.
          </p>
          <p>9. LIMITATION OF LIABILITY</p>
          <p>
            Except as otherwise required by law, in no event shall the Company
            or its directors, members, owners, employees or agents be liable for
            any special, indirect or consequential damages, or any other damages
            of any kind, including but not limited to loss of use, loss of
            profits or loss of data, whether in an action in contract, tort
            (including but not limited to negligence) or otherwise, directly or
            indirectly arising out of or in any way connected with the use of or
            inability to use our Website for the Polkadex Crowd Loan Campaign,
            including without limitation to any damages caused by or resulting
            from reliance by any Contributor on any information obtained from
            the Company or its Website, or that result from mistakes, omissions,
            interruptions, deletion of files or email, errors, defects, viruses,
            delays in operation or transmission or any failure of performance,
            whether or not resulting from a force majeure event, communications
            failure, theft, destruction or unauthorized access to records,
            programs or services.
          </p>
          <p>10. TAXES</p>
          <p>
            It shall be Your sole responsibility to determine and pay any taxes
            applicable to You towards the appropriate taxation authority for
            participating in the Polkadex Crowd Loan Campaign and to declare,
            report, withhold, and remit the correct amount of Applicable Taxes
            to the tax authorities. You shall be wholly and solely held
            responsible and liable for any non-fulfilment or non- performance of
            any tax obligations including but not limited to any claims, fines,
            punishments, penalties or other liabilities arising out of or from
            any of Your obligations in relation to the Applicable Taxes. The
            Company shall not be held responsible for any non-fulfilment or non-
            performance of Your tax obligations in relation to the Applicable
            Taxes. The Company shall not be responsible for determining any
            Applicable Taxes and declaring, withholding, collecting, reporting
            and remitting the correct amount of Applicable Taxes to the
            appropriate tax authorities.
          </p>
          <p>11. GOVERNING LAW AND JURISDICTION</p>
          <p>
            Any and all disputes or claims arising out of or in connection with
            or relating to these Terms, or the breach, interpretation or
            invalidity hereof, shall be governed by, and construed in accordance
            with, the laws of the British Virgin Islands, and the courts of
            British Virgin Islands shall have exclusive jurisdiction with
            respect to any and all such disputes or claims.
          </p>
          <p>12. MISCELLANEOUS</p>
          <p>12.1. Force Majeure</p>
          <p>
            The Company shall not be liable for any breach of these Terms or for
            any loss or damage due to Company&apos;s delay in performing, or
            failure to perform, any of its obligations under these Terms, if
            such breach, delay or failure is arising from any event beyond
            Company&apos;s reasonable control, including but not limited to
            flood, extraordinary weather conditions, earthquake, or other act of
            God, fire, war, insurrection, riot, labor dispute, accident, action
            of government, communications, power failure, or equipment or
            software malfunction or any other cause beyond Company&apos;s
            reasonable control (each, a &quot;Force Majeure Event&quot;).
          </p>
          <p>12.2. Relationship of Parties</p>
          <p>
            Nothing in these Terms shall be deemed to constitute a partnership
            between the Parties, nor constitute either Party constituting or
            becoming in any way the agent of the other Party for any purpose.
          </p>
          <p>12.3. No Assignment</p>
          <p>
            The Company may, at its sole and absolute discretion, assign its
            rights and/or delegate its duties under these Terms. You may not
            assign your rights or delegate Your duties, and any assignment or
            delegation without the written consent of the Company, which the
            Company may withhold at its sole and absolute discretion, shall be
            void. You shall not assign, trade or transfer, or attempt to assign,
            trade or transfer, Your right to any such claim. Any such assignment
            or transfer shall not impose any obligation or liability of the
            Company to the assignee or transferee.
          </p>
          <p>12.4. Severability</p>
          <p>
            If any term, provision, covenant, or condition of these Terms is
            held by a court or regulatory body of competent jurisdiction to be
            invalid, void, or unenforceable, the rest of the Terms shall remain
            in full force and effect and shall in no way be affected, impaired,
            or invalidated unless removal of that provision results in a
            material change to these Terms. The illegality, invalidity, or
            unenforceability of any provision of these Terms under the law of
            any jurisdiction shall not affect its legality, validity or
            enforceability under the law of any other jurisdiction nor the
            legality, validity or enforceability of any other provision.
          </p>
          <p>12.5. Waiver</p>
          <p>
            No delay or omission by the Company to exercise any right or power
            it has under these Terms shall impair or be construed as a waiver of
            such right or power. A waiver by the Company of any breach or
            covenant of any provision in these Terms shall not be construed to
            be a waiver of any subsequent breach or any other covenant of the
            same or a similar provision. All waivers must be in writing and
            signed by the Party waiving its rights.
          </p>
          <p>12.6. Entire Agreement</p>
          <p>
            These Terms constitute the entire agreement and understanding
            between the Parties with respect to its subject matter and
            supersedes all prior written or oral negotiations and/or agreements
            between the Parties with respect thereto and there are no other
            representations, understandings, or agreements between the Parties
            relating to such subject matter.
          </p>
          <p>ANNEXURE A</p>
          <p>EXCLUDED JURISDICTIONS</p>
          <p>
            Excluded Jurisdictions shall include any jurisdiction, including but
            not limited to the Sanctioned Country, where the Polkadex Crowd Loan
            Campaign, Reward Programme or any related transaction contemplated
            under these Terms are either prohibited, restricted or unauthorised
            in all forms or manner, either fully or partly, under Applicable
            Laws in such jurisdiction. Below is the list mentioned for the
            Excluded Jurisdictions:
          </p>
          <p>1. Sanctioned Country (as per Section 1.24 of the Terms)</p>
          <p>2. United States of America</p>
          <p>
            3. People’s Republic of China (including the Macau Special
            Administrative Region)
          </p>
          <p>OR</p>
          <p>
            1. Jurisdictions identified by the Financial Action Task Force
            subject to call for action and increased monitoring having strategic
            anti-money laundering, counter-financing of terrorism and
            proliferation financing deficiencies published at
            http://www.fatf-gafi.org/countries/#high-risk (last update in
            October 2021)
          </p>
          <p>
            Albania ➢ Barbados ➢ Burkina Faso ➢ Cambodia ➢ Cayman Islands ➢
            Democratic People&apos;s Republic of Korea (DPRK) ➢ Haiti ➢ Iran ➢
            Jamaica ➢ Jordan 13 ➢ Mali ➢ Malta ➢ Morocco ➢ Myanmar ➢ Nicaragua ➢
            Pakistan ➢ Panama ➢ Philippines ➢ Senegal ➢ South Sudan ➢ Syria ➢
            Turkey ➢ Uganda ➢ Yemen ➢ Zimbabwe 2. Other Excluded Jurisdictions
            include: ➢ Malaysia ➢ Indonesia ➢ Islamic Republic Afghanistan ➢
            People’s Republic of China (including the Macau Special
            Administrative Region) ➢ Republic of Armenia ➢ Republic of Guinea ➢
            Republic of Iraq ➢ Republic of Rwanda 14 ➢ Republic of Serbia ➢
            Thailand ➢ United Republic of Tanzania ➢ United States of America
          </p>
        </S.Content>
        <Newsletter {...newsletter} />
      </main>
      <Footer {...footer} />;
    </S.Wrapper>
  );
}
