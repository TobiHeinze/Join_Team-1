function renderLegalNotice() {
  resetContent();
  document.getElementById("content").innerHTML = renderLegalNoticeHTML();
  grayBackgroundForCurrentPage("legalBackgroundSidebar");
}

function renderLegalNoticeHTML() {
  return /*html*/ `
    <div class="help-overflow-scroll" style= "margin-left: -10px">
   <div class="help-container" >
<div class="over-headline">
   <span>Kanban Project Management Tool</span>
   <img class="go-back" onclick="renderSummary()" src="./assets/img/go-back.png"> 
</div>
<h1 class="headline font-64">Legal Notice</h1>
<h3 style="margin-bottom: 50px;"><u> This Legal Notice complies with the German laws under § 5 TMG and § 55
       RStV.</u></h3>
<b>Responsible for Content:</b>
<p>Annika Rothe <br>
   Bei der Kirche 9 <br>
   23749 Grube</p>
<p>Tobias Heinze <br>
  Holzhäuser Straße 65<br>
  04299 Leipzig</p>
<p>Albert Wissigkeit <br>
   Amorbacherstraße 3<br>
   68549 Ilvesheim</p> <br>
<b>Contact:</b> <br> <br>
Phone: 0152/09479495 <br>
E-Mail: rothe.annika@yahoo.com <br> <br>
<h2>Liability for Content</h2>
The contents of our website have been created with the greatest possible care. However, we cannot guarantee the
contents' accuracy, completeness, or topicality. According to Section 7, paragraph 1 of the TMG <br>
(Telemediengesetz -German Telemedia Act), we as service providers are liable for our content on these pages by general laws.
However, according to Sections 8 to 10 of the TMG, we service providers are not <br> obliged to monitor external
information transmitted or stored or investigate circumstances pointing to illegal activity. Obligations to remove or block
the use of information under general laws remain unaffected. <br> However, a liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon notification of such violations, we will remove the content
immediately. <br> <br>
<h2>Liability for Links</h2>
Our website contains links to external websites, over whose contents we have no control. Therefore, we cannot accept any liability for these external contents. The respective provider or operator of the websites <br> is always
responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of
linking. Illegal contents were not identified at the time of linking. <br> However, permanent monitoring of the contents
of the linked pages is not reasonable without specific indications of a violation. Upon notification of violations, we will
remove such links immediately. <br> <br>
<h2>Copyright</h2>
The contents and works on these pages created by the site operator are subject to German copyright law. The duplication,
processing, distribution, and any kind of utilization outside the limits of copyright require <br> the written consent of
the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial
use. In so far as the contents on this site were not created by the operator, <br> the copyrights of third parties are
respected. In particular, third-party content is marked as such. Should you become aware of a copyright infringement, please
inform us accordingly. Upon notification of violations, <br> we will remove such contents immediately. <br> <br>
Last Updated: [06/19/2023]
</div>
</div> `;
}


function renderHelp() {
  resetContent();
  document.getElementById("content").innerHTML = renderHelpHTML();
}


function renderHelpHTML() {
  return /*html*/ `
   <div class="help-overflow-scroll" style= "margin-left: -10px">
    <div class="help-container">
 <div class="over-headline">
 <span>Kanban Project Management Tool</span>
 <img class="go-back" onclick="renderSummary()" src="./assets/img/go-back.png">
 </div>
 <h1 class="headline font-64">Help</h1> 
 <h2>What is Join?</h2>
 <b>Join</b>  is a project initiated by the <b> Developer Academy</b>, aimed at providing hands-on experience with Git in the context of a complex project. <br> The "Join" project was collaboratively executed by a team of three individuals over a period of three weeks.
 <br>
 <h3> How to use it:</h3>
 <b class= "font-27">1.</b>  You have the option to either create an account or use guest access to log in. Follow the instructions provided on the homepage. <br>Once logged in, you will be directed to the "Summary" page, where you can find an overview of all tasks. Click on the overview to access the board or use the navigation on the left. <br> <br>
 <b class= "font-27">2.</b> There are multiple ways to add new tasks. For instance, you can utilize the "Add Task" option in the menu or use the "Add Task" button located at the top right of the "Board" interface. To modify or delete a task, simply click on it. <br> <br>
 <b class= "font-27">3.</b> You can view all existing contacts. Click on a name to access further information. Additionally, you can directly assign tasks to contacts by clicking on "+ Add Task." For editing or deleting contacts, use the "Edit" option, and to create a new contact, select "New Contact."
 </div>  `;
}
