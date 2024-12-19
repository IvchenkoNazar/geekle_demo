import { NgModule } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
  faBitbucket,
  faConfluence,
  faGithub,
  faGitlab, faJira,
  faMicrosoft,
  faSlack,
  faTrello
} from "@fortawesome/free-brands-svg-icons";

@NgModule()
export class FontAwesomeBrandIconsConfigurationModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub,
      faGitlab,
      faBitbucket,
      faMicrosoft,
      faTrello,
      faConfluence,
      faSlack,
      faJira
    );
  }
}
