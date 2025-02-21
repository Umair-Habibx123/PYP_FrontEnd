import { Component } from '@angular/core';
import { colors } from 'src/styles/colors';

@Component({
  selector: 'app-success-story',
  templateUrl: './success-story.component.html',
  styleUrls: ['./success-story.component.scss']
})
export class SuccessStoryComponent {
  colors = colors;

}
