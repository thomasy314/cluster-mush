import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link, Tooltip } from '@mui/material';
import { MainPagePaths } from '../../routing';


export const instagramName: string = 'clustermush';
export const instagramLink: string = `https://www.instagram.com/${instagramName}/`;

const iconPadding = '.2rem'

type IconProps = {
    color?: string, // Defaults to primary.main
    fontSize?: 'small' | 'inherit' | 'medium' | 'large' | number // Defaults to medium
}

export const ClusterMushInstagramIcon = (props: IconProps) => {

    const sx= {
        color: props.color ?? 'primary.main',
        fontSize: typeof(props.fontSize) === 'number' ? `${props.fontSize}em` : null,
        padding: iconPadding
    }

    const fontSize = typeof(props.fontSize) === 'number' ? 'inherit' : (props.fontSize ?? 'medium');

    return (
        <Link className="socialIcon" href={instagramLink}><Tooltip title={`@${instagramName}`}><InstagramIcon sx={sx} fontSize={fontSize} /></Tooltip></Link>
    )
}

export const emailLink: string = 'tom@clustermush.com';

export const ClusterMushEmailIcon = (props: IconProps) => {

    const sx= {
        color: props.color ?? 'primary.main',
        fontSize: typeof(props.fontSize) === 'number' ? `${props.fontSize}em` : null,
        padding: iconPadding
    }

    const fontSize = typeof(props.fontSize) === 'number' ? 'inherit' : (props.fontSize ?? 'medium');

    return (
        <Link className='SocialIcon' href={MainPagePaths.CONTACT}><MailOutlineIcon sx={sx} fontSize={fontSize} /></Link>
    )
}

type SocialIconsProps = {
    color?: string, // Defaults to primary.main
    fontSize?: 'small' | 'inherit' | 'medium' | 'large' | number // Defaults to medium
}

export const SocialIcons = (props: SocialIconsProps) => {
    return (
        <div>
            <ClusterMushInstagramIcon color={props.color} fontSize={props.fontSize} />
            <ClusterMushEmailIcon color={props.color} fontSize={props.fontSize} />
        </div>
    )
}