import type { NextPage } from "next";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Text, Textarea, Grid, Button } from "@nextui-org/react";
import {
  createServerSupabaseClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";

const CreateArticle: NextPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  return (
    <>
      <Grid.Container gap={1}>
        <Text h3>Title</Text>
        <Grid xs={12}>
          <Textarea
            name="title"
            aria-label="title"
            placeholder="Article Title"
            fullWidth={True}
            rows={1}
            size="xl"
          />
        </Grid>
      </Grid.Container>
    </>
  );
};

export default CreateArticle;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
