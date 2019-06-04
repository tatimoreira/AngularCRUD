import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.scss']
})
export class GstEditComponent implements OnInit {

  candidate: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private cs: CandidateService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      job: ['', Validators.required],
      resume: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cs.editCandidate(params['id']).subscribe(res => {
        this.candidate = res;
      });
    });
  }

  updateCandidate(person_name, job, resume) {
    this.route.params.subscribe(params => {
      this.cs.updateCandidate(person_name, job, resume, params['id']);
      this.router.navigate(['candidate']);
    });
  }


}
