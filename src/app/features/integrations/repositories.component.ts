import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { FaIconComponent, IconName, IconPrefix } from "@fortawesome/angular-fontawesome";

interface Repository {
  name: string;
  icon: [IconPrefix, IconName];
  selected: boolean;
}

@Component({
  selector: "component-repositories",
  imports: [
    FaIconComponent
  ],
  templateUrl: "./repositories.component.html"
})
export class RepositoriesComponent {
  repositories: Repository[] = [
    { name: "GitHub", icon: ["fab", "github"], selected: false },
    { name: "GitLab", icon: ["fab", "gitlab"], selected: false },
    { name: "Bitbucket", icon:["fab", "bitbucket"], selected: false },
    { name: "Azure DevOps", icon: ["fab", "microsoft"], selected: false },
    { name: "Trello", icon: ["fab", "trello"], selected: false },
    { name: "Confluence", icon: ["fab", "confluence"], selected: false },
    { name: "Slack", icon: ["fab", "slack"], selected: false },
    { name: "Jira", icon: ["fab", "jira"], selected: false }
  ];

  private readonly _router = inject(Router);

  toggleRepository(repository: Repository): void {
    repository.selected = !repository.selected;
  }

  integrate(): void {
    this._router.navigate(["/demo"]);
  }
}
