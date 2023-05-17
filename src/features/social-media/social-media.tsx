import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link, Tooltip } from '@mui/material';
import { MainPagePaths } from '../../routing';


export const instagramName: string = 'clustermush';
export const instagramLink: string = `https://www.instagram.com/${instagramName}/`;

export const ClusterMushInstagramIcon = () => {
    return (
            <Link className="socialIcon" href={instagramLink}><Tooltip title={`@${instagramName}`}><InstagramIcon fontSize='medium'/></Tooltip></Link>
    )
}

export const emailLink: string = 'tom@clustermush.com';

export const ClusterMushEmailIcon = () => {
    return (
        <Link className='SocialIcon' href={MainPagePaths.CONTACT}><MailOutlineIcon fontSize='medium'/></Link>
    )
}

export const SocialIcons = () => {
    return (
        <div>
            <ClusterMushInstagramIcon />
            <ClusterMushEmailIcon />
        </div>
    )
}