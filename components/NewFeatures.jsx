import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] rounded-[24px] bg-[#323f5d] py-3`}
    >
      <img src={imgUrl} className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px]  text-white">
      {title}
    </h1>
    <p className="mt-[16px] flex-1 font-normal text-[18px] text-[#b0b0b0]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
