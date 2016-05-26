import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const myListTranslation = {
    bookmark_label: 'Add to my list', // Translate
    clear_list: '<i class="fa fa-remove"></i><strong>Clear</strong> your list.',
    candidate_choice_label: "",
    list_label: "Candidates, races, and measures on my list", // Translate
    noCandidatesSaved: "No Candidate Selected",
    candidateChoicesExceeded: "More candidates added than you will be able to vote for.",
    toolbar_title: 'Get my list', // Translate
    toolbar_label: 'Grab your ballot choices to take to the polls.', // Translate
    updating_choices: 'Updating your choices. ',
    last_updated: 'Last updated',
    notifications: {
      candidate_saved: {
        title: 'Candidate added to your list.',
        message: ''
      },
      candidate_exceeded: {
        title: 'Candidate added to your list.',
        message: 'You have more candidates on your list than you will be able to vote for on your ballot.'
      },
      measured_saved: {
        title: 'Choice added to your list.',
        message: ''
      },
      ballot_choices_removed: {
        title: 'Your ballot choices have been removed.',
        message: ''
      }
    },
    mail_my_list: {
      subject: 'My List from Voter’s Edge',
    },
    delete_ballot_choices: {
      label: 'Delete all your ballot choices?',
      yes: 'Yes',
      no: 'No'
    },
    toolbar: [
      {
        label: 'Print your list.', // Translate
        icon: 'fa-print',
        description: "You can print this page by using the 'Print' feature of your browser.", // Translate
        type: 'print'
      },
      { label: 'Copy a link.',
        icon: 'fa-external-link',
        description: "Here is a link you can use to paste into a text message or bookmark.",  // Translate
        type: 'copy'
      },
      { label: 'Email your list.',
        icon: 'fa-envelope',
        description: "Get this list as well as a link to get back to your list.",  // Translate
        type: 'email'
      },
    ],
    email_link_my_list: {
      label: 'Email a link to your choices:',
      with_address: '<strong>With</strong> your address.',
      without_address: '<strong>Without</strong> your address.',
    },
    close_label: 'Close',
    contest_toolbar: [
      {
        label: {
          set: 'Review this contest later',  // Translate
          unset: 'Remove'  // Translate
        },
        icon: {
          set: 'fa-bookmark',
          unset: 'fa-remove'
        },
        type: 'review'
      },
      {
        label: 'Share this page',  // Translate
        icon: '',
        type: 'share'
      },
    ],

    candidate_toolbar: [
      {
        label: {
          set: 'Review this candidate later',  // Translate
          unset: 'Remove'  // Translate
        },
        icon: {
          set: 'fa-bookmark',
          unset: 'fa-remove'
        },
        type: 'review'
      },
      {
        label: 'Share this page', // Translate
        icon: '',
        type: 'share'
      },
    ],

    measure_toolbar: [
      {
        label: {
          set: 'Review this measure later',  // Translate
          unset: 'Remove'
        },
        icon: {
          set: 'fa-bookmark',
          unset: 'fa-remove'},
          type: 'review'
        },
      {
        label: 'Share this page',  // Translate
        icon: '',
        type: 'share'
      },
    ],
   // Translate
  choices_explanation:

      `
      <p>
        Because ballots are often long and complicated, Voter’s Edge
        provides you with a tool to help you keep track of your choices.

        <a href="#" data-toggle="modal" data-target="#myListInstructions">
          Learn more.
        </a>
      </p>


      <div class="modal fade" id="myListInstructions" tabIndex="-1" role="dialog" aria-labelledby="myListInstructionsLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myListInstructionsLabel">My List Instructions</h4>
            </div>
            <div class="modal-body">

              <p><strong>As you review your ballot, you can:</strong></p>
              <ul>
                <li><i aria-hidden="true" class="fa fa-check-square"></i>Choose the candidates you would like to remember to vote for.</li>
                <li><i aria-hidden="true" class="fa fa-thumbs-up"></i>Add your Yes or No vote for ballot measures.</li>
                <li><i aria-hidden="true" class="fa fa-bookmark"></i>Bookmark contests or measure to review later. (Coming soon.)</li>
              </ul>

              <p><strong>When you are finished (or need a break), you can:</strong></p>
              <ul>
                <li><i aria-hidden="true" class="fa fa-print"></i>Print your list.</li>
                <li><i aria-hidden="true" class="fa fa-external-link"></i>Copy a link to return to your list later.</li>
                <li><i aria-hidden="true" class="fa fa-envelope"></i>Email your choices to yourself.</li>
              </ul>

              <h4>Privacy Tips</h4>
              <p>Your choices are stored in your browser application data. If you are on a public computer, you can clear your choices using the “Clear Choices” button on the “My List” page, or <a href="http://www.wikihow.com/Clear-Your-Browser's-Cache" target="_blank">clear</a> your application data.
              </p>
              <p>
                We store your data in your own browser using <a href="https://www.techopedia.com/definition/27674/html5-local-storage" target="_blank">“Local Storage”</a> which is similar to a cookie, but does not transmit your data over the web. <a href="/page/privacy-policy" target="_blank">Privacy policy.</a>
              </p>

            </div>
          </div>
        </div>
      </div>


`,

};

export default myListTranslation;