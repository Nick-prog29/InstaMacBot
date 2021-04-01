﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using InstagramApiSharp;
using InstagramApiSharp.Classes;
using InstagramApiSharp.Classes.Models;
using InstaMacBot.classi_MacBotClient;


namespace InstaMacBot
{
    public partial class Form1 : Form
    {

        BotClient client = new BotClient();
        UserApi utente;
        public Form1()
        {
            InitializeComponent();
        }

   
        private async void bt_login_Click(object sender, EventArgs e)
        {
            
            utente = new UserApi(tx_username.Text, tx_password.Text);

            string esito = await utente.loginAsync();



            if (utente.is_logged)
            {
                //MessageBox.Show("loggato");
                bt_login.Enabled = false;
                bt_logout.Enabled = true;

                tab_comandi.Enabled = true;
                tx_password.ReadOnly = true;
                tx_password.Enabled = false;

                SSSBot follow_like = new FollowLikeLastsPicBot(utente, tx_console: tx_console, like_lasts_pic: 1, delay:60);
                SSSBot unfollow = new UnfollowBot(utente, tx_console: tx_console_unfollow);
                SSSBot extract = new ExtractFollowersBot(utente, tx_console: console_extract);

                client.bots.Add("follow_like", follow_like);
                client.bots.Add("unfollow", unfollow);
                client.bots.Add("extract", extract);
            }
            else
            {
                MessageBox.Show("errore nel login: " + esito);
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            ExtractFollowersBot x = (ExtractFollowersBot)client.bots["extract"];
            x.set_username(tx_username_estrai_followers.Text);
            x.start();
           
        }

        private void button2_Click(object sender, EventArgs e)
        {
            ExtractFollowersBot x = (ExtractFollowersBot)client.bots["extract"];
            x.save_on_file_extracted_list();
        }
        private void button3_Click(object sender, EventArgs e)
        {
            FollowLikeLastsPicBot x = (FollowLikeLastsPicBot)client.bots["follow_like"];
            x.load_list_from_file();
        }

        private void button2_Click_1(object sender, EventArgs e)
        {
            FollowLikeLastsPicBot x = (FollowLikeLastsPicBot)client.bots["follow_like"];
            x.clear_processing_accounts_list();
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (client.bots.ContainsKey("follow_like"))
            {
                FollowLikeLastsPicBot x = (FollowLikeLastsPicBot)client.bots["follow_like"];
                x.save_on_file_accounts_followed();
                MessageBox.Show("followed accounts saved in 'followed.txt'", "FollowLikeLastsPicBot");

                x.save_on_file_accounts_not_proccessed();
                MessageBox.Show("bot didn't process all account loaded the rest of accounts are saved in 'left.txt'", "FollowLikeLastsPicBot");
            }

            if (client.bots.ContainsKey("unfollow"))
            {
                UnfollowBot y = (UnfollowBot)client.bots["unfollow"];
                y.save_on_file_error_unfollow();
                MessageBox.Show("bot unfollowed errors saved in 'error_unfollow.txt'", "UnfollowBot");
                y.save_on_file_accounts_not_proccessed();
                MessageBox.Show("bot didn't process all account loaded the rest of accounts are saved in 'leftFollowed.txt'", "UnfollowBot");
            }
            
        }


      
        private void button5_Click(object sender, EventArgs e)
        {
            client.bots["follow_like"].start();     
            
        }

        private async Task<bool> wait(int seconds)
        {
            int i = 0;
            while (i < seconds)
            {
                await Task.Delay(1000);
                i++;
            }
            return true;
        }

        private async void button4_Click(object sender, EventArgs e)
        {
            FollowLikeLastsPicBot x = (FollowLikeLastsPicBot)client.bots["follow_like"];
            x.save_on_file_accounts_followed();
            x.save_on_file_accounts_not_proccessed();

            x.stop();
            int i = 0;
            do
            {
                await wait(1);
                i++;

            } while (x.is_running && i<5);

            if (x.is_running)
            {
                MessageBox.Show("couldn't stop bot: time out exxedeed");
            }
            
           
        }

        



        private async void bt_logout_Click(object sender, EventArgs e)
        {
            await utente.logoutAsync();

            bt_login.Enabled = true;
            bt_logout.Enabled = false;

            tab_comandi.Enabled = false;
            tx_password.Enabled = false;
            tx_password.ReadOnly = false;

        }

        private void button4_Click_1(object sender, EventArgs e)
        {
            UnfollowBot x = (UnfollowBot) client.bots["unfollow"];
            x.load_followed_accounts();

        }



        private void avvia_bot_unfollow()
        {
            client.bots["unfollow"].start();
        }
 
        private void button6_Click(object sender, EventArgs e)
        {
            avvia_bot_unfollow();
        }

       

        private async void button5_Click_1(object sender, EventArgs e)
        {
            UnfollowBot x = (UnfollowBot)client.bots["unfollow"];
            x.save_on_file_accounts_not_proccessed();
            x.save_on_file_error_unfollow();

            x.stop();

            int i = 0;
            do
            {
                await wait(1);
                i++;

            } while (x.is_running && i < 5);

            if (x.is_running)
            {
                MessageBox.Show("couldn't stop bot: time out exxedeed");
            }
        }

        private async void button5_Click_2(object sender, EventArgs e)
        {
            UserApi mio_utente = new UserApi("iammacca_", "M4ss3r1n15");
            string a = await mio_utente.loginAsync();
            MessageBox.Show(a);

            StartStopBot bot = new FollowLikeLastsPicBot(mio_utente, like_lasts_pic:3, tx_console:tx_console);

            ((FollowLikeLastsPicBot)bot).load_list_from_file();
            bot.start();
            
        }

        private void button5_Click_3(object sender, EventArgs e)
        {
            if (client.bots["follow_like"].is_running)
                MessageBox.Show("ON");
            else
                MessageBox.Show("OFF");
        }

        private void button6_Click_1(object sender, EventArgs e)
        {
            if (client.bots["unfollow"].is_running)
                MessageBox.Show("ON");
            else
                MessageBox.Show("OFF");
        }

        private void button7_Click(object sender, EventArgs e)
        {
            ExtractFollowersBot x = (ExtractFollowersBot)client.bots["extract"];
            x.clear_extracted_list();
        }
    }
}