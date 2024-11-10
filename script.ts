// // Listing Element
// document
//   .getElementById("resumeForm")
//   ?.addEventListener("submit", function(event) {
//     event.preventDefault();

//     //Type Assertion
//     const nameElement = document.getElementById("name") as HTMLInputElement;
//     const emailElement = document.getElementById("email") as HTMLInputElement;
//     const phoneElement = document.getElementById("phone") as HTMLInputElement;
//     const educationElement = document.getElementById(
//       "education"
//     ) as HTMLInputElement;
//     const experienceElement = document.getElementById(
//       "experience"
//     ) as HTMLInputElement;
//     const skillsElement = document.getElementById("skills") as HTMLInputElement;

//     if (
//       nameElement &&
//       emailElement &&
//       phoneElement &&
//       educationElement &&
//       experienceElement &&
//       skillsElement
//     ) {
//       const name = nameElement.value;
//       const email = emailElement.value;
//       const phone = phoneElement.value;
//       const education = educationElement.value;
//       const experience = experienceElement.value;
//       const skills = skillsElement.value;

//       // Resume Output
//       const resumeOutput = `
//         <h2>My Resume</h2>
//         <p><strong>Name:</strong>${name}</p>
//         <p><strong>Email:</strong>${email}</p>
//         <p><strong>Phone:</strong>${phone}</p>
        
//         <h3>Education</h3>
//         <p>${education}</p>
        
//         <h3>Experience</h3>
//         <p>${experience}</p>
        
//         <h3>Skills</h3>
//         <p>${skills}</p>
//         `;

//       const resumeOutputElement = document.getElementById("resumeOutput")
//       if (resumeOutputElement) {
//         resumeOutputElement.innerHTML = resumeOutput
//       } else {
//         console.error("The resume output element are missing !")
//       }
//     } else {
//       console.error("One or more output elements are missing !")
//     }
//   });


document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const addressElement = document.getElementById('address');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');

    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {

        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const address = (addressElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;

        // Handle profile picture
        const profilePictureFile = (profilePictureInput as HTMLInputElement).files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Create resume output
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});