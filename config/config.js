
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
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
	description: "Eager-to-learn student athlete with leadership and technical skills pursuing a career in computer science and business.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1WE9cAqA19zwYTeqcBkCE9QH21cDxsOkhd76kV8UIBsI/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a Senior at Apex Friendship High School as part of the class of 2023",
		"In the Technology Student Associaton, I was ranked 3rd (2021) and 2nd (2022) in Software Development in North Caolina",
		"I also enjoy philosophy and playing guitar.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Code Coach",
			description: "Taught students the basics of coding at theCoderSchool",
			icons: null,
		},
		{
			title: "Technology Student Association",
			description: "Created original, problem-solving code and presented for competition",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [/*
		{
			title: "StarBook",
			description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				},
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/star_book",
				},
			]
		},
		{
			title: "QuranTalk",
			description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
			icons: [
				{
					icon: faAppStore,
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
			title: "Email Me",
			link: "jonathanbarta3@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Jonathan Barta | Student | Programmer | Alturist",
	description: "Eager-to-learn student athlete with leadership and technical skills pursuing a career in computer science and business.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@jbsypher",
	description: "Jonathan Barta | Student | Programmer | Alturist",
	cards: [/*
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hashirshoaeb/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},*/
	]
}