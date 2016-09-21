import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content associated with a candidate.

const candidateCardTranslation = {
  no_photo_submitted: 'No photo submitted', //Translate

  encourage_candidate: 'Candidates can', //Translate
  encourage_candidate_link: 'contact us', //Translate
  encourage_candidate_action: 'to submit info.', //Translate
  photo_label: "Photo of ",
  participation: {
    researched: 'Experience partially researched by Voter’s Edge.', //Translate
    researched_encourage: 'Contact and ask the candidate to submit more information.',
    candidate_provided_info: 'Candidate has provided information.', //Translate
    candidate_no_info: 'Candidate has not provided information.', //Translate
    candidate_no_info_encourage: 'Contact them to encourage participation.',
    researched_data: 'Researched by Voter’s Edge',
  },
  screenreader: {
    accordion: 'For more in-depth information on this candidate, follow the links for each tab in this section. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
  },
  question_source_label: 'Questions from',
  candidate_website_label: 'Candidate website', //Translate
  accordionLabels: {
    experience: 'Experience', // Translate
    education: 'Education', // Translate
    community_activities: 'Community Activities', // Translate
    biography: 'Biography', // Translate
    professional_experience: 'Professional Experience', // Translate
    top_3_priorities: 'Top 3 Priorities', // Translate
    top_3_priorities_candidate: 'My Top 3 Priorities', // Translate
    judicial_ratings: 'Judicial Ratings', // Translate
    videos: 'Videos', //Translate
    political_philosophy: 'Political Philosophy', //Translate
    position_papers: 'Position Papers', //Translate
    responses_to_questions: 'Questions & Answers', //Translate
    political_beliefs: 'Political Beliefs', //Translate
    no_question_answer: 'No answer provided.', //Translate
    question_label: 'Question:', //Translate
    answer_label: 'Answer from:', //Translate
    profession: 'Profession:', //Translate
    official_statement: 'Official Statement',
    who_funds_candidate: 'Who gave money to this candidate?', //Translate
    who_supports_candidate: 'Who supports this candidate?', //Translate
    candidate_contact_info: 'Candidate Contact Info', //Translate
    experienceLabels: {
      institution: 'Institution', //Translate
      degree: 'Degree', //Translate
      subject: 'Subject', //Translate
      years: 'Years', //Translate
      last_year: 'Last Year', //Translate
    },
    position_appointed: ' — Appointed position', //Translate
    position_elected: ' — Elected position', //Translate
    endorsements_label: {
      featured: 'Featured', //Translate
      organization: 'Organization', //Translate
      individual: 'Individual', //Translate
      elected_official: 'Elected Official', //Translate
    },
    endorsements_label_plural: {
      featured: 'Featured', //Translate
      organization: 'Organizations', //Translate
      individual: 'Individuals', //Translate
      elected_official: 'Elected Officials', //Translate
    },
    sourceLabels: {
      officialStatement: 'Researched by Voter’s Edge',
      funding: 'Analysis by Maplight',
      judicial: 'Researched by Voter’s Edge',
    },
  },
  embedCard: {
    endorsementsLabel: 'Endorsements',
    top3PrioritiesLabel: 'Top 3 Priorities',
  },
  fundingTranslation: {
    accordionLabels: {
      contributions: 'Contributions',
      moreInfoAboutContributions: 'More information about contributions',
    },
    sourceLabel: {
      "Federal": 'Source: MapLight analysis of data from the Federal Election Commission.', // Translate
      "State": {
        ca: 'Source: MapLight analysis of data from the California Secretary of State.', // Translate text but not names
        il: 'Source: MapLight analysis of data from the Illinois Secretary of State.', // Translate text but not names
        ny: 'Source: MapLight analysis of data from the New York Secretary of State.', // Translate text but not names
      }
    },
    embedCard: {
      top3Donors: 'Top 3 Donors',
      totalRaised: 'Total raised',
      learnMore: 'Learn more',
    },
    totalMoneyRaisedLabel: "Total money raised", //Translate
    totalMoneyRaisedTooltip: 'These amounts reflect the money given to, and reported by, candidates’ principal campaign committees for the given office within this election cycle. This does not include money given to other types of committees, such as Super PACs that support or oppose the candidate.',
    whoGaveMostMoneyTitle: "Who gave the most money?",
    whoGaveMostMoneyLabel: {
      "Federal": 'Below are the top contributors that gave money to support the candidate(s).',
      "State": {
        ca: 'Below are the top contributors that gave money to support the candidate(s).',
        il: 'Below are the top contributors that gave money to support the candidate(s).',
        ny: 'Below are the top contributors that gave money to support the candidate(s).',
      }
    },
    whoGaveMostMoneyTooltip: {
      "Federal": 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
      "State": {
        ca: 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
        il: 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
        ny: 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
      }
    },
    whoGaveMostMoneyOrganizations: 'Organizations',
    whoGaveMostMoneyIndividuals: 'Individuals',
    pieCharts: {
      byState: {
        label: 'By State:',
        tooltip: {
          "Federal": 'Campaign committees are not required to disclose detailed information for contributions under $200. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
          "State": {
            ca: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
            ny: 'This graph shows the top four states from which funds were contributed to this candidate. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
            il: 'This graph shows the top four states from which funds were contributed to this candidate. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
          }
        },
        accessible_label: 'A pie chart containing color-coded sections corresponding to primary, secondary and other states.' // Translate
      },
      bySize: {
        label: 'By Size:',
        largeContributionsLabel: 'Large contributions',
        smallContributionsLabel: 'Small contributions',
        tooltip: {
          "Federal": 'Campaign committees are not required to disclose detailed information for contributions under $200. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
          "State": {
            ca: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
            ny: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',  // currently n/a ?
            il: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.', // currently n/a ?
          },
          accessible_label: 'A pie chart containing color-coded sections corresponding to large and small contributions.' // Translate
        }
      },
      byType: {
        label: 'By Type:',
        organizationsLabel: 'From organizations',
        individualsLabel: 'From individuals',
        tooltip: {
          "Federal": 'Large contributions (over $200) can be made by organizations through their political action committees (PACs) or by individuals.',
          "State": {
            ca: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
            ny: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',  // currently n/a ?
            il: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.', // currently n/a ?
          }
        },
        accessible_label: 'A pie chart containing color-coded sections corresponding to contributions from organizations and individuals.' // Translate
      },
    }
  }
};

export default candidateCardTranslation;