import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
	faCog,
	faExclamationTriangle,
	faEye,
	faEyeSlash,
	faFile,
	faHeart,
	faInfoCircle,
	faLock,
	faMinus,
	faPlus,
	faSignInAlt,
	faSignOutAlt,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faEtsy,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function registerIcons(): void {
	library.add(
		faAngleDoubleLeft,
		faAngleDoubleRight,
		faCog,
		faExclamationTriangle,
		faEye,
		faEyeSlash,
		faFile,
		faHeart,
		faInfoCircle,
		faLock,
		faMinus,
		faPlus,
		faSignInAlt,
		faSignOutAlt,
		faUser,
		faGithub,
		faEtsy,
		faTwitter
	);
}
