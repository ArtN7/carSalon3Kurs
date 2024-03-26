import styles from '../header/Header.module.css'
import '../../../../styles/global.css'
import { useNavigate } from 'react-router-dom'
import FormToOrder from '../../../UI/formToOrder/FormToOrder';
import { useState } from 'react';

const Header = () => {
    const nav = useNavigate();
    const root = document.getElementById('root');
    const [isPopupActive, setPopupActive] = useState(false);
    isPopupActive ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
    console.log(root);
    return (
        <div id='head' className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.logo}>
                    <span>Краснодар</span> 
                    <span>Авто</span>
                </li>
                <li><button className={styles.itemButton} onClick={() => nav('aboutcompany')}>О компании</button></li>
                <li><button className={styles.itemButton} onClick={() => nav('reviews')}>Отзывы</button></li>
                <li><button className={styles.itemButton} onClick={() => nav('contacts')}>Контакты</button></li>
                <li>
                    <div className={styles.orderAndPhone}>
                        <button className={styles.itemButton} onClick={() => {
                                setPopupActive(!isPopupActive);
                                isPopupActive ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
                            }}>Заказать
                        </button>
                        {isPopupActive ?   
                            <div className={styles.popup}>
                                <button className={styles.closeButton} onClick={() => setPopupActive(!isPopupActive)}>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 
                                        7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 
                                        7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033
                                        15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 
                                        16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 
                                        16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z" fill="#000000"/>
                                    </svg>
                                </button>
                                <p className={styles.leaveDataParagraph}>Оставьте свои данные и мы с вами свяжемся</p>    
                                <FormToOrder pesronalData={true} formId={'headerOrder'} formStyle={styles.form}/>
                            </div> 
                            : ''
                        }
                        <a className={styles.phone} href="tel:+79189999999">8 (918) 999-99-99</a>
                    </div>
                </li>
            </ul>
                    
        </div>
    )
}
export default Header;