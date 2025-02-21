import { Component } from '@angular/core';
import { colors } from 'src/styles/colors';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent {
  colors = colors;
  faqs = [
    "What is Pakistan Youth Portal?",
    "How can I sign up for a free trial?",
    "What features are in the free trial?",
    "What pricing plans does Pakistan Youth Portal offer?",
    "Is Pakistan Youth Portal compatible with other software?",
    "How secure is my data with Pakistan Youth Portal?",
    "Does Pakistan Youth Portal offer customer support?",
    "Can I customize Pakistan Youth Portal?"
  ];
}
