import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom'
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from '@mantine/core';
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';

export default function AuthenticationForm() {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) =>
                val.length <= 6
                    ? 'Password should include at least 6 characters'
                    : null,
        },
    });

    return (
        <Paper radius='md' p='xl' withBorder className='form'>
            <Text size='lg' weight={500}>
                Welcome to Mantine, {type} with
            </Text>

            {/* <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group> */}

            <Divider label='Or continue with email' labelPosition='center' my='lg' />

            <form onSubmit={form.onSubmit(() => { })}>
                <Stack>
                    {type === 'register' && (
                        <TextInput
                            label='Name'
                            placeholder='Your name'
                            value={form.values.name}
                            onChange={(event) =>
                                form.setFieldValue('name', event.currentTarget.value)
                            }
                            radius='md'
                        />
                    )}

                    <TextInput
                        required
                        label='Email'
                        placeholder='hello@mantine.dev'
                        value={form.values.email}
                        onChange={(event) =>
                            form.setFieldValue('email', event.currentTarget.value)
                        }
                        error={form.errors.email && 'Invalid email'}
                        radius='md'
                    />

                    <PasswordInput
                        required
                        label='Password'
                        placeholder='Your password'
                        value={form.values.password}
                        onChange={(event) =>
                            form.setFieldValue('password', event.currentTarget.value)
                        }
                        error={
                            form.errors.password &&
                            'Password should include at least 6 characters'
                        }
                        radius='md'
                    />

                </Stack>

                <Group position='apart' mt='xl' style={{ justifyContent: 'end' }}>
                    {/* <Anchor
                        component='button'
                        type='button'
                        color='dimmed'
                        onClick={() => toggle()}
                        size='xs'
                    >
                        {type === 'register'
                            ? 'Already have an account? Login'
                            : "Don't have an account? Register"}
                    </Anchor> */}
                    <Link to='/vendordash'>
                        <Button type='submit' radius='xl'>
                            {upperFirst(type)}
                        </Button>
                    </Link>
                </Group>
            </form>
        </Paper >
    );
}
