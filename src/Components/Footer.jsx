import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <>
                <div className='funniture-bg-dark-grey py-5'>
                    <div className="container">
                        <h5>
                            Toko Furniture Online Terbesar di Indonesia
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt unde, esse quas necessitatibus delectus dolor ea fugiat est dolorem placeat, excepturi dolorum autem, velit hic repellendus fuga! Iusto, minus ut?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet molestiae corporis vel eos ad, nisi eligendi error, possimus, maiores adipisci consectetur culpa eaque quia aspernatur nam dolor vitae animi.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, delectus error. Voluptas facilis deserunt facere fugit, iste laudantium, tempora nisi excepturi odit autem voluptatum nesciunt? Possimus dolores unde eligendi at.
                        </p>
                    </div>
                </div>
                <div className='container py-5 d-none d-md-block'>
                    <div className='row'>
                        <div className='col-2'>
                            <h5>
                                funniture
                            </h5>
                            <p>
                                Tentang Kami
                            </p>
                            <p>
                                Blog
                            </p>
                            <p>
                                Karir
                            </p>
                        </div>
                        <div className='col-2'>
                            <h5>
                                Layanan Pelanggan
                            </h5>
                        </div>
                        <div className='col-2'>
                            <h5>
                                Kontak Kami
                            </h5>
                        </div>
                        <div className='col-6'>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}