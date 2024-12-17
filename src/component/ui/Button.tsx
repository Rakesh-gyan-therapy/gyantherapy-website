import PlayLogo from "../../assets/logo/play.svg";
export const Button = (props :{url:string, text:string})   =>{
    return <>
        <button
              onClick={() => {
                window.open(`${props.url}`, "_blank");
              }}
              className="w-fit flex gap-2 items-center bg-primary-orange rounded-xl py-3 md:py-4 text-white font-semibold px-4 md:px-6 text-sm md:text-base"
            >
              {props.text}
              <img src={PlayLogo} alt="Play now logo" />
            </button>
    </>
}