import { Component } from '@angular/core';
import { ProjectService } from 'app/services/project.service';
import { Router } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent {
  projects: Project[]=[];

  constructor(private projectService: ProjectService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(){
    this.projectService.getProjectsList().subscribe(data => {
      this.projects = data;
      console.log(this.projects)
    });
  }

  projectDetails(id: number){
    this.router.navigate(['view-project', id]);
  }

  updateProject(id: number){
    this.router.navigate(['update-project', id]);
  }

  // deleteProject(id: number){
  //   this.projectService.deleteProject(id).subscribe( data => {
  //     console.log(data);
  //     this.getProjects();
  //   })
  //}
}
