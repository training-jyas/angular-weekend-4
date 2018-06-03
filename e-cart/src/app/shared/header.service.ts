import { Subject } from 'rxjs/Subject';

export class HeaderService {
    public menuClicked = new Subject<string>();

    private pageSelected: string;

    constructor() {

    }
}
