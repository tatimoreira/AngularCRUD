
import { Component, OnInit } from '@angular/core';
import Candidate from '../Candidate';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})
export class GstGetComponent implements OnInit {

  candidates: Candidate[];

  constructor(private cs: CandidateService) { }

  ngOnInit() {
    this.cs
      .getCandidates()
      .subscribe((data: Candidate[]) => {
        this.candidates = data;
      });
  }

  deleteCandidate(id) {
    this.cs.deleteCandidate(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}