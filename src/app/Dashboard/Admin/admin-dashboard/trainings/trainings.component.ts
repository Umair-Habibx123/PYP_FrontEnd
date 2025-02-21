import { Component } from '@angular/core';
import { colors } from 'src/styles/colors';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent {
  colors = colors;

  traning = [

    {
      logo: '../../../assets/images/traning1.jpg',
      title: 'Figma UI UX Design Training to get job in Your Career',
      category: 'Traning Category',
      description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
    },
    {
      logo: '../../../assets/images/traning2.jpg',
      title: 'Figma UI UX Design Training to get job in Your Career',
      category: 'Traning Category',
      description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
    },
    {
      logo: '../../../assets/images/traning3.jpg',
      title: 'Figma UI UX Design Training to get job in Your Career',
      category: 'Traning Category',
      description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
        "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
        "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
        "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
        "daily to maintain a steady flow of potential prospects.",
    },
  ];
  isModalOpen = false;
  selectedTraning: any = null;


  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


  searchTerm: string = '';
  filteredTraning = [...this.traning];

  filterTraning() {
    this.filteredTraning = []; // Reset before filtering
    this.filteredTraning = this.traning.filter(traning =>
      traning.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      traning.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      traning.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}