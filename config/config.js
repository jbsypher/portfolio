
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faAppleWhole, faComputer } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Jonathan",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Jonathan",
	description: "I'm an eager-to-learn student with leadership and technical skills pursuing a career in computer science and business.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1U2V0ThgpbqbwZLbu9KggnmC0uEkkk9Bp/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"-Honors Student at The University of North Carolina at Chapel Hill in the Class of 2027",
		"-International Business Machines Thomas J. Watson Memorial Scholarship Recipient",
		"-Assured Admittance into Kenan-Flagler Business School; selected into top 2% of 3000+ applicants",
		"-Buckley Public Service Scholar"
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Code Coach",
			description: "Instructed students through coding exercises at theCoderSchool. Created a code training program for newly hired staff.",
			icons: faAppleWhole,
			link: "https://www.thecoderschool.com/"
		},
		{
			title: "Competitor at Technology Student Association",
			description: "Created original, problem-solving code and presented for competition. Debated current technological issues in time-limited competition.",
			icons: faComputer,
			link: "https://tsaweb.org/"
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "AttendanceScript",
			description: "Attendance Taking App built for Zoom",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/jbsypher/AttendanceScript/tree/master",
				},
			]
		},
		{
			title: "TheReviewIdentifier",
			description: "A machine learning based program which accurately identifies the sentiment of reviews.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/jbsypher/TheReviewIdentifier",
				},
			]
		},
		{
			title: "YouMach",
			description: "A machine learning application meant to allow everyday people to analyze data in endless applications.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/jbsypher/YouMach",
				},
			]
		},

		/*
		{
			title: "QuranTalk",
			description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
			icons: [
				{
					icon: faGitStore,
					link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			]
		},*/
	],
}

export const contact = {
	title: "Get in touch",
	description: "Contact me at your leisure via email",
	buttons: [
		{
			title: "Personal Email",
			link: "mailto:jonathanbarta3@gmail.com",
			isPrimary: true,
		},
		{
			title: "School Email",
			link: "mailto:jbarta@unc.edu",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Jonathan Barta | Student | Altruist",
	description: "Eager-to-learn student with leadership and technical skills pursuing a career in computer science and business.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@jbsypher",
	description: "Jonathan Barta | Student | Altruist",
	cards: [
		{
			title: "My website",
			link: "https://jbsypher.github.io/portfolio",
		},
		{
			title: "My GitHub",
			link: "https://github.com/jbsypher/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/jonathan-abrose-barta-",
		},
	]
}