import Script from 'next/script'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const OneTapComponent = () => {
    const router = useRouter()

    const generateNonce = async () => {
        const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))
        const encoder = new TextEncoder()
        const encodedNonce = encoder.encode(nonce)
        const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce)
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
        return [nonce, hashedNonce]
    }

    useEffect(() => {
        const initializeGoogleOneTap = async () => {
            const [nonce, hashedNonce] = await generateNonce()
            // console.log('Nonce: ', nonce, hashedNonce)
            // check if there's already an existing session before initializing the one-tap UI
            const { data, error } = await supabase.auth.getSession()
            if (error) {
                console.error('Error getting session:', error)
                return
            }
            if (data.session) {
                router.push('/guestbook')
                return
            }
            /* global google */
            if (typeof window !== 'undefined' && window.google && google.accounts) {
                google.accounts.id.initialize({
                    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                    callback: async (response) => {
                        try {
                            // send id token returned in response.credential to supabase
                            const { data, error } = await supabase.auth.signInWithIdToken({
                                provider: 'google',
                                token: response.credential,
                                nonce,
                            })
                            if (error) throw error
                            // redirect to protected page

                            router.push('/guestbook')
                        } catch (error) {
                            console.error('Error logging in with Google One Tap:', error)
                        }
                    },
                    nonce: hashedNonce,
                    use_fedcm_for_prompt: true,
                    auto_select: false, // Tambahan: pastikan pengguna bisa pilih akun baru
                })
                google.accounts.id.prompt()
            }
        }

        initializeGoogleOneTap()
    }, [])

    return (
        <>
            <Script
                src="https://accounts.google.com/gsi/client"
                strategy="afterInteractive"
            />
            <div id="oneTap" className="fixed top-0 right-0 z-[100]" />
        </>
    )
}

export default OneTapComponent
