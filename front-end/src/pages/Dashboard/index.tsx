import {
    InlineTitle,
    BodyContainer,
    InlineContainer,
    DashboardBackground,
} from './styled';

import Statement from './Statement';
import Card from '../../components/Card';
import Input from '../../components/input';
import Header from '../../components/header';
import Button from '../../components/button';

const Dashboard = () => {
    const wallet = 5000;

    return (
        <DashboardBackground>
            <Header />
            <BodyContainer>
                <div>
                    <Card noShadow width={'90%'}>
                        <InlineTitle>
                            <h2 className={'h2'}>
                                Saldo Atual
                            </h2>
                        </InlineTitle>
                        <InlineContainer>
                            <h3 className={'wallet'}>
                                { wallet.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' }) }
                            </h3>
                        </InlineContainer>
                    </Card>

                    <Card noShadow width={'90%'}>
                        <InlineTitle>
                            <h2 className={'h2'}>
                                Receber Pix
                            </h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex: 1}} placeholder={'valor'} />
                            <Button>Gerar código</Button>
                        </InlineContainer>

                        <p className={'primary-color'}>Pix copia e cola</p>
                        <p className={'primary-color'}>sndkdnksnd ansjdndsjsnjjd sj d</p>
                    </Card>

                    <Card noShadow width={'90%'}>
                        <InlineTitle>
                            <h2 className={'h2'}>
                                Pagar PIX
                            </h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex: 1}} placeholder={'Insira a chave'} />
                            <Button>Pagar PIX</Button>
                        </InlineContainer>
                    </Card>
                </div>
                <div>
                    <Card noShadow width={'90%'}>
                        <InlineTitle>
                            <h2 className={'h2'}>Extrato da Conta</h2>
                        </InlineTitle>
                        <Statement />
                    </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    );
}

export default Dashboard;