using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ParamountRestaurant.Startup))]
namespace ParamountRestaurant
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
