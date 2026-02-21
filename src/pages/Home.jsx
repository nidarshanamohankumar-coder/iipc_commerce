import "./Home.css";
import logo from "../assets/images/pkrlogo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
  faBook, 
  faIndustry, 
  faLaptop, 
  faMicrophone, 
  faBriefcase, 
  faFlask, 
  faHandshake, 
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';

const objectives = [
  { icon: faBook, text: "Update syllabus and curriculum based on industrial needs." },
  { icon: faIndustry, text: "Conduct industrial study tours for students." },
  { icon: faLaptop, text: "Organize in-plant training programmes." },
  { icon: faMicrophone, text: "Arrange technical lectures by industry experts." },
  { icon: faBriefcase, text: "Enhance placement opportunities for students." },
  { icon: faFlask, text: "Provide testing and consultancy services to industries." },
  { icon: faHandshake, text: "Sign MoUs for training, visits, and placements." },
  { icon: faGlobe, text: "Maintain strong relationships with employers and industries." },
];

const moUData = [
  {
    programme: "Department of English",
    noOfMoUs: 5,
    companyDetails: "Infosys, TCS, Cognizant, Wipro, HCL",
    link: "https://www.example.com/infosys-mou"
  },
  {
    programme: "Department of Tamil",
    noOfMoUs: 3,
    companyDetails: "Deloitte, EY, KPMG",
    link: "https://www.example.com/deloitte-mou"
  },
  {
    programme: "Department of Mathematics",
    noOfMoUs: 2,
    companyDetails: "Accenture, IBM",
    link: "https://www.example.com/accenture-mou"
  },
  {
    programme: "Department of Computer Science",
    noOfMoUs: 2,
    companyDetails: "Accenture, IBM",
    link: "https://www.example.com/accenture-mou"
  },
  {
    programme: "Department  of Physics",
    noOfMoUs: 2,
    companyDetails: "Accenture, IBM",
    link: "https://www.example.com/accenture-mou"
  },
  {
    programme: "Department of Commerce",
    noOfMoUs: 2,
    companyDetails: "Accenture, IBM",
    link: "https://www.example.com/accenture-mou"
  },
  {
    programme: "Department of Management",
    noOfMoUs: 2,
    companyDetails: "Accenture, IBM",
    link: "https://www.example.com/accenture-mou"
  },

];

const activityData = [
  {
 sno: 1,
    staffName: "Dr. Nancy Fernandez",
    department: "Department of English",
    activity: "Content Writing"
},
{
 sno: 2,
    staffName: "Dr. Nancy Fernandez",
    department: "Department of Tamil",
    activity: "Class  Taking, Teaching Tamil   to the foreign Countries"
},
{
 sno: 3,
    staffName: "Dr. Nancy Fernandez",
    department: "Department of Mathematics",
    activity: "Class Taking"
},
{
 sno: 4,
    staffName: "Dr. Nancy Fernandez",
    department: "Department of Physics",
    activity: "Weighbridge Calibrations, Scaling of Machines"
},
{
 sno: 5,
    staffName: "Dr. Nancy Fernandez",
    department: "Department of Computer science",
    activity: "Software testing"
},
{
 sno: 6,
    staffName: "Dr. Nancy Fernandez",
    department: "Department of Commerce",
    activity: "E-Auditing"
},
{
 sno: 7,
    staffName: "Dr. Nancy Fernandez",
    department: "Department of Management",
    activity: "Labour Welfare Legislations"
},

]




function Home() {
  return (
    <>    <div className="text-content">
      <h2>Industry Institute Partnership Cell - IIPC</h2>
    </div>
    <div className="card-container">
      <div className="box-content">
        <h1>VISION:</h1>
        <h2>To become the bridge that turns classroom knowledge into 
          real-world impact , where industry needs meet student potential, shaping tomorrow’s workforce today. </h2>
        </div>
      <div className="box-content">
        <h1>MISSION:</h1>
        <h2>Forge strong, sustainable partnerships with industry to enhance curriculum relevance,
           boost employability, and create win-win opportunities for students, faculty & employers.</h2>
        </div>
    </div>

    <div className="text-content">
      <h2>Who We are ?</h2>
      <p>IIPC of <b>P.K.R. Arts College for Women </b>identifies the <b>expectations of industries and enhances institutional readiness</b> to meet these needs by facilitating sponsored <b>R&D projects, organizing seminars, workshops, and a variety of industrial training programmes.</b> 
        The Industry-Institute partnership plays
         a key role in updating faculty members with the latest <b>industry practices and prepares students to be industry-ready</b> by offering them exposure to <b> real-time industrial environments and evolving technologies.</b> The primary objective of the IIPC is to establish
          strong connections with leading industries in and around <b>Gobichettipalayam, Erode, and Coimbatore, </b>
        while also expanding its collaborations with industries across the country in the near future.</p>
    </div>

    <section className="objectives">
      <h2>Objectives of IIPC</h2>
      <div className="objectives-grid">
        {objectives.map((item, index) => (
          <div className="objective-card" key={index}>
            <FontAwesomeIcon icon={item.icon} className="icon" />
            <p className="objective-text">{item.text}</p>
          </div>
          
))}
      </div>
    
    </section>

    <section className="mou-section">
  <h2>Programme MoUs</h2>
  <div className="table-container">
    <table className="mou-table">
      <thead>
        <tr>
          <th>Programme(s)</th>
          <th>No. of MoUs signed</th>
          <th>Details of the Company</th>
        </tr>
      </thead>
      <tbody>
        {moUData.map((row, index) => (
          <tr key={index}>
            <td>{row.programme}</td>
            <td>
              <a href={row.link} target="_blank" rel="noopener noreferrer">
                {row.noOfMoUs}
              </a>
            </td>
            <td>{row.companyDetails}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
<div className="text-content">
    <h2>Programmes organised 2024-2025 <br />(Department wise industry institute  programmes) </h2>

</div>
<section className="program-section">

    <div className="program-card">
      <div className="program-date">
        <span>Date</span><h4>19 Feb 2026</h4></div>

        
      <div className="program-details">
        <div className="detail-row">
          <div className="label">Title of the Programme: </div>
          <div className="value">Industrial Visit</div>
        </div>

        <div className="detail-row">
          <div className="label">Name of the Guests: </div>
          <div className="value">Miss Nidarshana</div>
        </div>

        <div className="detail-row">
          <div className="label">No of Beneficiaries:</div>
          <div className="value">120 Students</div>
        </div>
      </div>
    </div>

    <div className="program-card">
      <div className="program-date">
        <span>Date</span><h4>19 Feb 2026</h4></div>

        
      <div className="program-details">
        <div className="detail-row">
          <div className="label">Title of the Programme: </div>
          <div className="value">Industrial Visit</div>
        </div>

        <div className="detail-row">
          <div className="label">Name of the Guests: </div>
          <div className="value">Miss Nidarshana</div>
        </div>

        <div className="detail-row">
          <div className="label">No of Beneficiaries:</div>
          <div className="value">120 Students</div>
        </div>
      </div>
    </div>

    <div className="program-card">
      <div className="program-date">
        <span>Date</span><h4>19 Feb 2026</h4></div>

        
      <div className="program-details">
        <div className="detail-row">
          <div className="label">Title of the Programme: </div>
          <div className="value">Industrial Visit</div>
        </div>

        <div className="detail-row">
          <div className="label">Name of the Guests: </div>
          <div className="value">Miss Nidarshana</div>
        </div>

        <div className="detail-row">
          <div className="label">No of Beneficiaries:</div>
          <div className="value">120 Students</div>
        </div>
      </div>
    </div>
</section>
<div className="text-content">
    <h2>Documentation  of IIPC</h2>
    <nav>
      <a href="#" target="_self"><p>Invitation and Web link</p></a>
      <a href="#" target="_self"><p>epartment internship  link</p></a>
      <a href="#" target="_self"><p>Students placed through intern</p></a>
    </nav>
</div>
<div className="text-content">
  <h2>Contact :</h2>
 <p> <b>Coordinator</b> - Dr.N.Nancy Fernandez,Head and Associate Professor,Department of Commerce</p>
 <p> <b>Asst. Co-ordinator </b> - S.Deepika,Assitant Professor in Mathematics  </p>
</div>

<div className="text-content">
<h2>Staff Activity Allotment :</h2>
</div>

<section className="mou-section">
  <div className="table-container">
    <table className="mou-table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Staff Name</th>
          <th>Department</th>
          <th>Activity Allotted</th>
        </tr>
      </thead>
      <tbody>
        {activityData.map((row, index) => (
          <tr key={index}>
            <td>{row.sno}</td>
            <td>{row.staffName}</td>
            <td>{row.department}</td>
            <td>{row.activity}</td>
</tr>

        ))}
      </tbody>
    </table>
  </div>

</section>

    </>

   
  );
}

export default Home;
