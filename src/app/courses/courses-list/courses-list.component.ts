import { Component, Input, OnInit } from '@angular/core';

export interface Course {
  image: string;
  tag: string;
  name: string;
  price: string;
  platform: string;
}

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() searchText: string = '';
  courses: Course[] = [
    {
      image: 'assets/images/course1.png',
      tag: 'Frontend Development',
      name: 'Complete Full-Stack Web Development Bootcamp',
      price: '$199',
      platform: 'Udemy',
    },
    {
      image: 'assets/images/course2.png',
      tag: 'Full-Stack',
      name: 'Complete web development course from Scratch',
      price: '$199',
      platform: 'Udemy',
    },
    {
      image: 'assets/images/course3.png',
      tag: 'Full-Stack',
      name: 'Java FullStack Developer Specialization',
      price: 'FREE',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course4.png',
      tag: 'Backend Development',
      name: 'Node.js & Express Backend Masterclass',
      price: '$149',
      platform: 'Udemy',
    },
    {
      image: 'assets/images/course5.png',
      tag: 'Frontend Development',
      name: 'Modern React with Redux',
      price: 'FREE',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course6.png',
      tag: 'Artificial Intelligence',
      name: 'AI for Everyone',
      price: '$99',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course7.png',
      tag: 'Machine Learning',
      name: 'Machine Learning A-Z™: Hands-On Python & R',
      price: '$179',
      platform: 'Udemy',
    },
    {
      image: 'assets/images/course8.png',
      tag: 'Data Science',
      name: 'Data Science Specialization',
      price: '$249',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course9.png',
      tag: 'Data Analytics',
      name: 'Data Analysis with Python',
      price: 'FREE',
      platform: 'edX',
    },
    {
      image: 'assets/images/course10.png',
      tag: 'Cybersecurity',
      name: 'Introduction to Cyber Security',
      price: '$99',
      platform: 'FutureLearn',
    },
    {
      image: 'assets/images/course11.png',
      tag: 'Cloud Computing',
      name: 'AWS Cloud Practitioner Essentials',
      price: '$149',
      platform: 'Udemy',
    },
    {
      image: 'assets/images/course12.png',
      tag: 'DevOps',
      name: 'DevOps Engineering Foundations',
      price: '$129',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course13.png',
      tag: 'Mobile Development',
      name: 'iOS App Development with Swift',
      price: '$199',
      platform: 'Udemy',
    },
    {
      image: 'assets/images/course14.png',
      tag: 'Mobile Development',
      name: 'The Complete Android App Developer Bootcamp',
      price: '$179',
      platform: 'Udemy',
    },
    {
      image: 'assets/images/course15.png',
      tag: 'Game Development',
      name: 'Unity Game Development Masterclass',
      price: 'FREE',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course16.png',
      tag: 'Programming Languages',
      name: 'Python for Everybody',
      price: 'FREE',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course17.png',
      tag: 'Programming Languages',
      name: 'Mastering Java Programming',
      price: '$99',
      platform: 'Udemy',
    },
    {
      image: 'assets/images/course18.png',
      tag: 'Data Structures & Algorithms',
      name: 'Data Structures and Algorithms Specialization',
      price: '$249',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course19.png',
      tag: 'Operating Systems',
      name: 'Introduction to Operating Systems',
      price: 'FREE',
      platform: 'edX',
    },
    {
      image: 'assets/images/course20.png',
      tag: 'Database',
      name: 'Database Management Systems',
      price: '$99',
      platform: 'GeeksforGeeks',
    },
    {
      image: 'assets/images/course21.png',
      tag: 'Networking',
      name: 'Computer Networks & Internet Protocol',
      price: 'FREE',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course22.png',
      tag: 'Cloud Computing',
      name: 'Google Cloud Fundamentals',
      price: '$119',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course23.png',
      tag: 'AI',
      name: 'Deep Learning Specialization',
      price: '$299',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course24.png',
      tag: 'Blockchain',
      name: 'Blockchain Basics',
      price: 'FREE',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course25.png',
      tag: 'Data Visualization',
      name: 'Data Visualization with Tableau',
      price: '$129',
      platform: 'Udemy',
    },
    {
      image: 'assets/images/course26.png',
      tag: 'Cybersecurity',
      name: 'Ethical Hacking Essentials',
      price: '$149',
      platform: 'edX',
    },
    {
      image: 'assets/images/course27.png',
      tag: 'Robotics',
      name: 'Robotics: Aerial Robotics',
      price: 'FREE',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course28.png',
      tag: 'IoT',
      name: 'Internet of Things (IoT) - Complete Guide',
      price: '$159',
      platform: 'Udemy',
    },
    {
      image: 'assets/images/course29.png',
      tag: 'Quantum Computing',
      name: 'Quantum Computing Fundamentals',
      price: '$199',
      platform: 'Coursera',
    },
    {
      image: 'assets/images/course30.png',
      tag: 'Software Engineering',
      name: 'Software Engineering Essentials',
      price: 'FREE',
      platform: 'Coursera',
    },
    // ...add more
  ];

  filteredCourses: Course[] = [];

  ngOnInit() {
    this.filteredCourses = this.courses;
  }

  ngOnChanges() {
    this.applyFilter();
  }

  applyFilter() {
    if (!this.searchText || this.searchText.trim() === '') {
      this.filteredCourses = this.courses;
      return;
    }
    const q = this.searchText.trim().toLowerCase();
    this.filteredCourses = this.courses.filter(
      (course) =>
        course.name.toLowerCase().includes(q) ||
        course.tag.toLowerCase().includes(q)
    );
  }

  get rows(): Course[][] {
    const rows = [];
    for (let i = 0; i < this.filteredCourses.length; i += 4) {
      rows.push(this.filteredCourses.slice(i, i + 4));
    }
    return rows;
  }
}
