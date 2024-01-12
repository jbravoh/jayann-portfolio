import { SVGProps } from "react";
import { StyledFooterSvg } from "../../modules/footer/footer.style";

interface Props extends SVGProps<SVGSVGElement> {}

const LinkedIn = (props: Props) => (
  <StyledFooterSvg viewBox="0 0 50 50" aria-label="linkedin logo" {...props}>
    <g id="linkedin">
      <path
        id="Vector"
        d="M45.3125 1.17181H4.6875C3.76575 1.16243 2.87792 1.51909 2.21882 2.16354C1.55973 2.80799 1.18321 3.68758 1.17188 4.60931V45.3984C1.18526 46.3187 1.56268 47.1963 2.22155 47.8391C2.88042 48.4819 3.76708 48.8375 4.6875 48.8281H45.3125C46.2343 48.8354 47.1215 48.4775 47.7803 47.8326C48.4391 47.1878 48.8158 46.3084 48.8281 45.3867V4.59759C48.8117 3.67856 48.4332 2.80317 47.7749 2.16168C47.1166 1.52019 46.2317 1.16446 45.3125 1.17181ZM15.3008 41.7968H8.22656V19.0351H15.3008V41.7968ZM11.7852 15.9335C10.9738 15.9343 10.1804 15.6944 9.50539 15.2442C8.83038 14.794 8.30406 14.1537 7.99302 13.4043C7.68199 12.6549 7.6002 11.8301 7.75802 11.0342C7.91584 10.2383 8.30617 9.50711 8.87963 8.93311C9.45308 8.3591 10.1839 7.96808 10.9796 7.8095C11.7754 7.65093 12.6003 7.73192 13.3499 8.04224C14.0996 8.35257 14.7404 8.87827 15.1913 9.55286C15.6422 10.2274 15.8828 11.0206 15.8828 11.832C15.8818 12.3713 15.7744 12.905 15.5669 13.4028C15.3593 13.9005 15.0556 14.3525 14.6732 14.7327C14.2908 15.1129 13.8371 15.414 13.3382 15.6187C12.8393 15.8235 12.3049 15.9278 11.7656 15.9257L11.7852 15.9335ZM41.7969 41.7968H34.7227V30.7226C34.7227 28.0859 34.6758 24.6913 31.0469 24.6913C27.418 24.6913 26.8008 27.5663 26.8008 30.5507V41.7968H19.7383V19.0351H26.5195V22.1601H26.6133C27.5586 20.371 29.8633 18.4843 33.3047 18.4843C40.4688 18.4687 41.7969 23.1835 41.7969 29.2968V41.7968Z"
      />
    </g>
  </StyledFooterSvg>
);

export default LinkedIn;
