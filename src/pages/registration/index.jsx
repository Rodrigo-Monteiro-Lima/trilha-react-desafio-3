import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, WarningText, CriarText, Row, Wrapper, Text } from './styles';
const Registration = () => {
    const { control } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input placeholder="Nome completo" name="nome" leftIcon={<MdPerson />} control={control}/>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control}/>
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <WarningText>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </WarningText>
                </Row>
                <Row>
                    <Text>já tenho conta.<CriarText> Fazer login</CriarText></Text>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export default Registration;
