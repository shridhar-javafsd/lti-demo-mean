import { Component, Input, OnInit } from '@angular/core';
import { Writer } from 'src/app/models/Writer';
import { WriterService } from 'src/app/services/writer.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  @Input()
  writerId: any = '';
  writerData: Writer = {};

  constructor(private writerService: WriterService) { }

  ngOnInit(): void {
    console.log(this.writerId);
    this.writerService.getWritersById(this.writerId)
      .subscribe((resp) => {
        console.log(resp);
        this.writerData = resp;
      });
  }

}
