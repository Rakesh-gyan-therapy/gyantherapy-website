interface SocialTitleProps {
    title: string,
}
const SocialTitle = ({ title }: SocialTitleProps) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            {/* <span className="text-xs font-medium text-primary-orange text-center">
                {tag.toUpperCase()}
            </span> */}
            <span className="text-3xl font-bold text-text-heading text-center">
                {title}
            </span>
        </div>
    );
};

export default SocialTitle;