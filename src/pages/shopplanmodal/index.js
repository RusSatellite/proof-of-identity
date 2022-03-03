import './modal.css';
import { useDispatch, useSelector } from "react-redux";
import { CloseButton } from 'react-bootstrap';
import * as Actions from "../../store/actions"

const ShopPlanModal = () => {
    const dispatch = useDispatch();
    const state = useSelector(({fuse}) => fuse.shopplan_modal.state);
    const showHideClassName = state ? "modal display-block" : "modal display-none";

    const handleClose = (e) => {
        e.preventDefault();
        dispatch(Actions.hide_shopplan_modal());
    }

    const handleShopplan1 = (e) => {
        e.preventDefault();
        window.open("/profile", "_parent");
    }

    const handleShopplan2 = (e) => {
        e.preventDefault();
        dispatch(Actions.hide_shopplan_modal());
        dispatch(Actions.show_payment_modal(20));
    }

    const handleShopplan3 = (e) => {
        e.preventDefault();
        dispatch(Actions.hide_shopplan_modal());
        dispatch(Actions.show_payment_modal(500));
    }

    return (
        <div className={showHideClassName}>
            <section className="container mt-4 modal-main">
                <h1 className='proof-identify-bold'>Join the Proof of Identity network and start minting the Global Income Coin<CloseButton onClick={handleClose}/></h1>
                <div className=' list-scrollbar'>
                    <table className='table fs-1p25 text-center'>
                    <tbody>
                        <tr style={{ backgroundColor: "#BEC0BF" }} className="proof-identify-bold ">
                        <td></td>
                        <td>Free subscription</td>
                        <td className='bordertop borderleft borderright'>Supporter</td>
                        <td className='bordertop borderleftdouble borderright'>Founder contributor</td>
                        </tr>
                        <tr>
                        <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Cost</td>
                        <td>Free</td>
                        <td className='borderleft borderrightdouble'>20 €</td>
                        <td className='borderright borderleftdouble'>500 €</td>
                        </tr>
                        <tr>
                        <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Signature Daily Minting<sub>[1]</sub></td>
                        <td className='text-center position-relative'><span className='position-absolute' >1x</span></td>
                        <td className='borderright borderleft text-center position-relative'><span className='position-absolute' >2x</span></td>
                        <td className='borderright borderleftdouble text-center position-relative'><span className='position-absolute' >3x</span></td>
                        </tr>
                        <tr>
                        <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Node Rewards (up to 2x the daily minting)<sub>[2]</sub></td>
                        <td>Only signature</td>
                        <td className='borderright borderleft'>Signature + 1 node </td>
                        <td className='borderright borderleftdouble'>Signature + 10 nodes</td>
                        </tr>
                        <tr>
                        <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Total maximum rewards up to:</td>
                        <td className='text-center position-relative'><span className='position-absolute' >1x</span></td>
                        <td className='borderright borderleft text-center position-relative'><span className='position-absolute' >4x</span></td>
                        <td className='borderright borderleftdouble text-center position-relative'><span className='position-absolute' >23x</span></td>
                        </tr>
                        <tr>
                        <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Wallet mode<sub>[3]</sub></td>
                        <td>Locked until phase 2</td>
                        <td className='borderright borderleft'>Locked until phase 1 </td>
                        <td className='borderright borderleftdouble'>Unlocked at earliest</td>
                        </tr>
                        <tr>
                        <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Master verifier<sub>[4]</sub></td>
                        <td>No</td>
                        <td className='borderright borderleft'> No </td>
                        <td className='borderright borderleftdouble'>Yes</td>
                        </tr>
                        <tr>
                        <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Identification<sub>[5]</sub></td>
                        <td>0.5 (below parity)</td>
                        <td className='borderright borderleft borderbottom'>1 (At parity) </td>
                        <td className='borderright borderleftdouble borderbottom'>3 (high identification rate)</td>
                        </tr>
                        <tr >
                        <td className='border-0'></td>
                        <td className='border-0'><button className='btn btn-app-primary py-2' style={{minHeight: "4rem"}} onClick={handleShopplan1}>Join for free</button></td>
                        <td className='border-0'><button className='btn btn-app-dark-gray py-2 position-relative'  style={{minHeight: "4rem"}} onClick={handleShopplan2}>Become a supporter</button></td>
                        <td className='border-0'><button className='btn btn-app-black py-2 position-relative' style={{minHeight: "4rem"}} onClick={handleShopplan3}>Become a founder contributor</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ShopPlanModal;
