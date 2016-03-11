import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the ballot overview page for each ballot for all states
// Includes Candidates, Measures, Voting info, polling place, other elections selections and my list intros.
// URL samples

// Tests: http://votersedge.org/ca/ballot/election/32-70b46e/address/null/zip/90001/section/overview'

const ballotOverviewTranslation = {
    ballot_address: 'What\'s on the ballot for your address in', // Translate
    ballot_area: 'What\'s on the ballot for ', // Translate
    ballot_error: "There was a problem finding this ballot.", // Translate
    ballot_extra_result_explanation: {
      ca: 'Results based on only a zip code may return more contests than will appear on your actual ballot. <a href="/en/ca">For the most specific results available, enter your full address.</a>', // Translate
      il: 'Results based on only a zip code may not return all of the contests that will appear on your actual ballot. <a href="/en/il">For the most specific results available, enter your full address.</a>', // Translate
      ny: 'Results based on only a zip code may not return all of the contests that will appear on your actual ballot. <a href="/en/ny">For the most specific results available, enter your full address.</a>', // Translate
      default: ''
    },
    contest_extra_result_explanation: {
      ca: 'May not appear on your actual ballot. <a href="/ca/page/how-we-get-our-data">Learn More</a>', // Translate
      il: 'May not appear on your actual ballot. <a href="/il/page/how-we-get-our-data">Learn More</a>', // Translate
      ny: 'May not appear on your actual ballot. <a href="/ny/page/how-we-get-our-data">Learn More</a>', // Translate
      default: ''
    },
    ballot_no_address: 'Here’s what’s on the ballot.', // Translate
    choose_candidates: 'Candidates', // Translate
    candidates_intro_prefix: 'Get in-depth information about the ', // Translate
    candidates_intro: 'candidates running for', // Translate
    candidates_offices: 'offices', // Translate
    candidates_office: 'office', // Translate
    choose_propositions: 'Ballot Measures', // Translate
    propositions_intro: 'Learn more about the ', // Translate
    propositions: 'measures', // Translate
    proposition: 'measure', // Translate
    choose_voting_info: 'Voting Info', // Translate
    choose_voting_info_label: 'Get info on <strong>when, where and how to vote</strong>', // Translate
    choices: "My List", // Translate
    choices_label: "<p><strong>Keep track of your ballot choices and make a list to take to the polls</p></strong><p>As you review races, candidates and measures, you can add them to your list. When you are finished, go to <strong>My List</strong> to send your list to your email, printer, or copy a link to your phone.</p><p>We are a non-partisan, non-profit voter advocacy project and will not mail you anything or track your choices.</p>", // Translate
    noPollingLocationLabel: 'Polling location & hours', // Translate
    noPollingLocationLookup: '<p><strong>Want to look up your polling place?</strong></p> <p></p>', // Translate
    noPollingLocationLinkLabel: 'Look up my polling place', // Translate
    pollingLocationLabel: 'Your polling location & hours', // Translate
    myPollingLocationLabel: 'My polling location and hours', // Translate

    noHoursLabel: 'Polls are open from', // Translate
    hoursLabel: 'Open from', // Translate
    hours: {
      ca: '7 a.m. - 8 p.m.',
      il: '6 a.m. - 7 p.m.',
      ny: '6 a.m. - 7 p.m.',
    },


    more_voting_info: "Consulte más información sobre las votaciones", // Translate
    other_address: "Busque la boleta electoral para", // Translate
    other_address_link: "otra dirección", // Translate
    other_elections: "Consulte su boleta electoral para", // Translate
    past_elections_or: "O", // Translate
    past_elections_link: "busque las elecciones pasadas", // Translate
    past_elections_url: '/ca/en/page/elections-archive', // No translation
    privacy_statement: "Su información es privada, a menos que decida compartirla.", // Translate
    privacy_statement_link: "Política de privacidad", // Translate
    privacy_statement_url: '/page/privacy-policy', // No translation

    jurisdictionLabels: {
      Federal: {
        label: "Estados Unidos",  // Translate
        iconFileName: "Federal",  // No translation
        description: '',
      },
      State: {
        label: "Estado de ",  // Translate
        iconFileName: "State",  // No translation
        description: '',
      },
      Judicial: {
        label: "Judicial",  // Translate
        iconFileName: "Judicial",  // No translation
        description: '',
      },
      School: {
        label: "Escuela",  // Translate
        iconFileName: "School",  // No translation
        description: '',
      },
      County: {
        label: "Condado", // Translate
        iconFileName: "County", // No translation
        description: '',
      },
      Place: {
        label: "Local",  // Translate
        iconFileName: "Place", // No translation
        description: '',
      },

      Special: {
        label: "Distrito especial",  // Translate
        iconFileName: "Special", // No translation
        description: '',
      },
    },


  }
};

export default ballotOverviewTranslation;
